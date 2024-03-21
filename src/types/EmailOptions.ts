export type EmailOptions = {
  headers: {
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
};

export type EmailIdentity = {
  name: string;
  emailAddress: string;
};
