import { EmailAttachmentOptions, EmailOptions } from "./EmailOptions"

type AttachmentId = string;

export type Emlifier = {
  get options(): EmailOptions;
  toString: () => string;
  addAttachment: (options: EmailAttachmentOptions) => Promise<AttachmentId | undefined>;
  removeAttachment: (attachmentId: AttachmentId) => undefined
  download: () => void;
}