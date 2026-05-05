"use client";

import { useState } from "react";
import { subscribeEmail } from "../actions";

export default function EarlyAccessForm({ initialCount }: { initialCount: number }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [count, setCount] = useState(initialCount);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const result = await subscribeEmail(formData);
    if (result.success) {
      setStatus("success");
      if (result.count) setCount(result.count);
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-8 py-6 text-center">
        <div className="text-2xl">✓</div>
        <p className="text-lg font-semibold text-emerald-400">You&apos;re on the list.</p>
        <p className="text-sm text-zinc-400">
          {count > 1 ? `${count} developers waiting. ` : ""}
          We&apos;ll reach out when early access opens.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {count > 0 && (
        <p className="text-center text-sm text-zinc-400">
          <span className="font-semibold text-violet-400">{count}</span>{" "}
          {count === 1 ? "developer" : "developers"} already waiting
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
          />
          <select
            name="role"
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
          >
            <option value="builder">I build MCP servers</option>
            <option value="developer">I build AI agents</option>
            <option value="both">Both</option>
            <option value="other">Just curious</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Get Early Access →"}
        </button>
        {status === "error" && (
          <p className="text-center text-sm text-red-400">{errorMsg}</p>
        )}
        <p className="text-center text-xs text-zinc-600">No spam. No pitch deck. Just early access when it&apos;s ready.</p>
      </form>
    </div>
  );
}
