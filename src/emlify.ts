import { attachmentToString, buildAttachment } from "./attachments";
import generateId from "./generateId";
import propertyToHeader from "./headerStringMap";
import { EmailAttachment, EmailAttachmentOptions, EmailHeaders, EmailOptions } from "./types/EmailOptions";
import { Emlifier } from "./types/Emlifier";

export namespace emlify {
  export function create(options: EmailOptions): Emlifier {
    const attachments: EmailAttachment[] = [];
    const boundary = generateId(42);
    const emlifier: Emlifier = {
      get options() {
        return { ...options };
      },
      download: function () {
        const blob = new Blob([emlifier.toString()], { type: "text/plain" });
        const anchor = document.createElement("a");
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = `${options.headers.subject}.eml`;
        anchor.click();
      },
      addAttachment: async function (attachment: EmailAttachmentOptions) {
        const builtAttachment = await buildAttachment(attachment);
        attachments.push(builtAttachment);
        return builtAttachment.attachmentId;
      },
      removeAttachment: function (attachmentId: string) {
        const index = attachments.findIndex((x) => x.attachmentId === attachmentId);
        if (index >= 0) attachments.splice(index, 1);
      },
      toString: () => {
        const headersString = headersToString(options.headers);
        const attachmentsString = attachments.map((attachment) => attachmentToString(attachment, boundary)).join("\n");
        return `${headersString}\n${attachmentsString}`;
      },
    };

    return emlifier as Emlifier;
  }
}

function headersToString(headers: EmailHeaders) {
  let output = "";
  for (const header in headers) {
    output += `${propertyToHeader(header as keyof EmailHeaders)}: ${headers[header]}\n`;
  }

  return output;
}

