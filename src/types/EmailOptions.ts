export type EmailHeaders = {
  from: EmailIdentity;
  to: EmailIdentity[];
  subject: string;
  date?: Date;
  sender?: EmailIdentity;
  replyTo?: EmailIdentity;
  mimeVersion?: string;
  messageId?: string;
  cc?: EmailIdentity[];
  bcc?: EmailIdentity[];
  xUnsent?: 1;
  xMailer?: string;
};

export type EmailOptions = {
  headers: EmailHeaders;
};

export type EmailIdentity = {
  name: string;
  emailAddress: string;
};

export type EmailAttachmentOptions = Omit<EmailAttachment, "encodedFile"> & { contents: string | Blob }

export type EmailAttachment = {
  name: string;
  fileName: string;
  encodedFile: string;
  type: EmailAttachmentType;
  attachmentId: string;
};

export type EmailAttachmentType = "application/pdf" | "text/plain";
