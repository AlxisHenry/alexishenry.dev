import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD, NODEMAILER_FROM } =
    process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PASSWORD,
    },
  });

  const getTextFromObject = (obj: Record<string, string>) =>
    Object.entries(obj)
      .map(([key, value]) => `${value}`)
      .join("\n\n");

  const mailOptions: Mail.Options = {
    from: NODEMAILER_FROM,
    to: NODEMAILER_EMAIL,
    subject: "[alexishenry.dev] - Vous avez reçu un message",
    text: getTextFromObject(body),
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
