import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await resend.emails.send({
      from: body.email,
      to: ["esam.alsawah2000@gmail.com"],
      subject: body.subject,
      react: await EmailTemplate({
        message: String(body.message) ?? "",
        name: String(body.name) ?? "",
      }),
    });

    if (error) {
      console.log("error", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
