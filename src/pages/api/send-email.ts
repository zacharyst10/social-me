import type { APIRoute } from "astro";
import { Resend } from "resend";
import { renderToString } from "react-dom/server";
import NewClientSignUpEmail from "../../emails/NewClientSignUp";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const nameData = data.get("name");
  const emailData = data.get("email");
  const messageData = data.get("message") as string;

  if (
    !nameData ||
    typeof nameData !== "string" ||
    !emailData ||
    typeof emailData !== "string"
  ) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const name = nameData;
  const email = emailData;
  const message = messageData || "No message provided";

  // Instantiate the email component
  const emailComponent = NewClientSignUpEmail({ name, email, message });

  // Render the email component to a string
  const emailHtml = renderToString(emailComponent);

  // Send the email
  try {
    const response = await resend.emails.send({
      from: "Leah <email@mail.someslc.com>",
      to: "stout.zachary@gmail.com",
      subject: "New client sign up!",
      react: NewClientSignUpEmail({ name, email, message }),
    });
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
};
