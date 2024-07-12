import { EmailHeaders } from "./types/EmailOptions";

export default function propertyToHeader(property: keyof EmailHeaders): string {
  return {
    from: "From",
    to: "To",
    subject: "Subject",
    date: "Date",
    sender: "Sender",
    replyTo: "Reply-To",
    messageId: "Message-ID",
    cc: "CC",
    bcc: "BCC",
    xUnsent: "X-unsent",
    xMailer: "X-mailer",
  }[property];
}
