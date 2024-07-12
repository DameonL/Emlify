import generateId from "./generateId";
import { EmailAttachmentOptions, EmailAttachment } from "./types/EmailOptions";

export async function buildAttachment(attachment: EmailAttachmentOptions): Promise<EmailAttachment> {
    let contents: string | Blob = attachment.contents;
    if (typeof contents !== "string") {
      const reader = new FileReader();
      reader.readAsDataURL(contents);
      await new Promise<void>((resolve) => {
        reader.onloadend = () => {
          const result = reader.result as String;
          contents = result.slice(result.indexOf("data:/;base64"));
          resolve();
        };
      });
    }
  
    const builtAttachment: EmailAttachment = {
      fileName: attachment.fileName,
      name: attachment.name,
      encodedFile: contents as string,
      type: attachment.type,
      attachmentId: generateId(48),
    };
  
    return builtAttachment;
  }
  
  export function attachmentToString(attachment: EmailAttachment, boundary: string) {
    return `--${boundary}\nContent-Type: ${attachment.type}; name="${attachment.name}\nContent-Transfer-Encoding: base64\nContent-Disposition: attachment; filename="${attachment.fileName}"\n\n${attachment.encodedFile}\n`;
  }
  