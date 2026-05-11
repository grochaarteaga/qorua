"use server";

import { Resend } from "resend";
import { neon } from "@neondatabase/serverless";

function db() {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
}

async function ensureTable() {
  const sql = db();
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS signups (
      email TEXT PRIMARY KEY,
      role  TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function getSignupCount(): Promise<number> {
  const sql = db();
  if (!sql) return parseInt(process.env.SIGNUP_SEED ?? "0", 10);
  try {
    await ensureTable();
    const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM signups`;
    return count + parseInt(process.env.SIGNUP_SEED ?? "0", 10);
  } catch {
    return parseInt(process.env.SIGNUP_SEED ?? "0", 10);
  }
}

export async function subscribeEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email." };
  }

  const sql = db();
  if (sql) {
    try {
      await ensureTable();
      await sql`
        INSERT INTO signups (email, role)
        VALUES (${email}, ${role})
        ON CONFLICT (email) DO NOTHING
      `;
    } catch (err) {
      console.error("DB error:", err);
    }
  }

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

  const count = await getSignupCount();
  return { success: true, count };
}
