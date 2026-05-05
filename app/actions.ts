"use server";

import { Resend } from "resend";

let signupCount = parseInt(process.env.SIGNUP_SEED ?? "0", 10);

export async function getSignupCount() {
  return signupCount;
}

export async function subscribeEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email." };
  }

  signupCount += 1;

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Qorua <onboarding@resend.dev>",
        to: "guillermo.rocha.arteaga@gmail.com",
        subject: `New early access signup: ${email}`,
        text: `New signup on qorua.com\n\nEmail: ${email}\nRole: ${role}\nDate: ${new Date().toISOString()}`,
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  } else {
    console.log(`[Qorua signup] email=${email} role=${role}`);
  }

  return { success: true, count: signupCount };
}
