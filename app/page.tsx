import EarlyAccessForm from "./components/EarlyAccessForm";
import { getSignupCount } from "./actions";

const features = [
  {
    icon: "⚡",
    title: "Instant Discovery",
    description:
      "Search any MCP server by capability in seconds. No more digging through GitHub repos or asking in Discord. Find what you need and connect immediately.",
  },
  {
    icon: "🛡️",
    title: "Real Trust Scores",
    description:
      "Reputation built from actual usage — not self-reported claims. Every completed job updates the score. Know before you call who delivers and who doesn't.",
  },
  {
    icon: "⚙️",
    title: "USDC Payments Built In",
    description:
      "Charge per call, per token, or per task. Payments settle in USDC on Base — instant, borderless, sub-cent capable. No invoices. No waiting 30 days.",
  },
];

const stats = [
  { value: "140M+", label: "agent payments in 2025", source: "Nevermined" },
  { value: "$5T", label: "agentic commerce by 2030", source: "McKinsey" },
  { value: "57%", label: "devs with agents in production", source: "LangChain 2026" },
];

export default async function Home() {
  const count = await getSignupCount();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold tracking-tight text-white">
          qorua
        </span>
        <a
          href="#early-access"
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          Get early access
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Early access — MCP server registry
        </div>

        {/* Pain stat — improvement 2 */}
        <p className="mx-auto mb-6 text-lg font-semibold text-zinc-300">
          19,000+ MCP servers.{" "}
          <span className="text-red-400">Less than 5% earn a dollar.</span>
        </p>

        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Your MCP server is{" "}
          <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
            invisible.
          </span>
          <br />
          Let&apos;s fix that.
        </h1>

        <p className="mx-auto mt-5 text-xl font-semibold text-white">
          Qorua is the directory for MCP servers.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-zinc-400">
          Register in 2 minutes. Get discovered by every AI agent looking for
          what you do. Accept USDC payments per call with no invoices.
        </p>

        {/* Early access form with counter — Improvement 1 */}
        <div id="early-access" className="mx-auto mt-10 max-w-lg">
          <EarlyAccessForm initialCount={count} />
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-800 pt-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-zinc-500">{s.label}</span>
              <span className="text-xs text-zinc-700">— {s.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-violet-400">
            The problem
          </h2>
          <p className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-snug text-white">
            The MCP ecosystem is exploding. There&apos;s no map.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                label: "No directory",
                text: "Developers find MCP servers by googling or asking in Discord. There is no standard way to search by capability.",
              },
              {
                label: "No trust",
                text: "Any server can claim anything. There are no ratings, no credentials, no track record. Every integration is a leap of faith.",
              },
              {
                label: "No payments",
                text: "Monetising an MCP server means bolting on Stripe, writing billing logic, chasing invoices. It shouldn't be this hard.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <p className="mb-2 text-sm font-semibold text-red-400">
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-violet-400">
          What Qorua does
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-3xl font-semibold text-white">
          One API. Find, trust, and pay for any MCP server.
        </p>

        {/* Improvement 2 — API snippet */}
        <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6 font-mono text-sm">
          <p className="mb-3 text-xs text-zinc-500">Search the registry</p>
          <p className="text-emerald-400">
            GET{" "}
            <span className="text-white">
              /search?q=web-scraping&amp;maxPrice=0.01
            </span>
          </p>
          <div className="mt-4 space-y-1 text-zinc-400">
            <p><span className="text-violet-400">{`{`}</span></p>
            <p className="pl-4"><span className="text-blue-400">&quot;name&quot;</span>: <span className="text-emerald-300">&quot;browserbase-mcp&quot;</span>,</p>
            <p className="pl-4"><span className="text-blue-400">&quot;capability&quot;</span>: <span className="text-emerald-300">&quot;web-scraping&quot;</span>,</p>
            <p className="pl-4"><span className="text-blue-400">&quot;pricePerCall&quot;</span>: <span className="text-orange-300">0.005</span>,</p>
            <p className="pl-4"><span className="text-blue-400">&quot;trustScore&quot;</span>: <span className="text-orange-300">98.4</span>,</p>
            <p className="pl-4"><span className="text-blue-400">&quot;totalJobs&quot;</span>: <span className="text-orange-300">12847</span></p>
            <p><span className="text-violet-400">{`}`}</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-colors hover:border-violet-500/40"
            >
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-violet-400">
            How it works
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-3xl font-semibold text-white">
            Two minutes to get discovered.
          </p>
          <div className="mx-auto max-w-2xl space-y-6">
            {[
              {
                step: "01",
                title: "Register your MCP server",
                text: "Add your server's capabilities, pricing, and endpoint. Takes 2 minutes via API or dashboard.",
              },
              {
                step: "02",
                title: "Agents discover you automatically",
                text: "Any AI agent querying the registry for your capability gets your server in results — ranked by reputation and price.",
              },
              {
                step: "03",
                title: "Get paid in USDC on every call",
                text: "Set a price per call. Payments arrive in USDC on Base — instant settlement, no invoices, no chargebacks.",
              },
              {
                step: "04",
                title: "Build your reputation",
                text: "Every completed job updates your score. Good track record means more discovery, more calls, more revenue.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="mt-1 font-mono text-sm font-bold text-violet-500 opacity-60">
                  {item.step}
                </span>
                <div>
                  <p className="mb-1 font-semibold text-white">{item.title}</p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improvement 3 — founder section */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/50 p-10">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-violet-500/40 bg-zinc-800">
              {/* Replace the src below with your actual photo URL */}
              <img
                src="/founder.png"
                alt="Guillermo Rocha"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-lg font-semibold leading-snug text-white">
                &ldquo;I built stablecoin rails for ships. Now I&apos;m building them for agents.&rdquo;
              </p>
              <p className="text-sm text-zinc-500">
                <span className="text-zinc-300">Guillermo Rocha</span> — Founder, Qorua.
                Previously built{" "}
                <a
                  href="https://portpagos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:underline"
                >
                  PortPagos
                </a>
                {" "}— live USDC settlement for the maritime industry. Zero failed settlements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison — improvement 1 */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-violet-400">
          How we compare
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-3xl font-semibold text-white">
          Every other directory is free. That&apos;s the problem.
        </p>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900">
                <th className="px-6 py-4 text-left font-medium text-zinc-400">Feature</th>
                <th className="px-6 py-4 text-center font-medium text-zinc-500">mcp.so</th>
                <th className="px-6 py-4 text-center font-medium text-zinc-500">Smithery</th>
                <th className="px-6 py-4 text-center font-semibold text-violet-400">Qorua</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Server discovery",
                  mcpso: "✓",
                  smithery: "✓",
                  qorua: "✓",
                },
                {
                  feature: "Quality verification",
                  mcpso: "✗",
                  smithery: "Partial",
                  qorua: "✓",
                },
                {
                  feature: "Usage-based trust score",
                  mcpso: "✗",
                  smithery: "✗",
                  qorua: "✓",
                },
                {
                  feature: "Built-in payments",
                  mcpso: "✗",
                  smithery: "✗",
                  qorua: "✓",
                },
                {
                  feature: "Per-call USDC settlement",
                  mcpso: "✗",
                  smithery: "✗",
                  qorua: "✓",
                },
              ].map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900/40"}
                >
                  <td className="px-6 py-4 text-zinc-300">{row.feature}</td>
                  <td className="px-6 py-4 text-center text-zinc-500">{row.mcpso}</td>
                  <td className="px-6 py-4 text-center text-zinc-500">{row.smithery}</td>
                  <td className="px-6 py-4 text-center font-semibold text-violet-400">{row.qorua}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Be first in the registry.
          </h2>
          <p className="mb-10 text-zinc-400">
            Early access is limited. MCP server developers and agent builders
            only.
          </p>
          <div className="mx-auto max-w-lg">
            <EarlyAccessForm initialCount={count} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-zinc-600">
          <span>© 2026 Qorua</span>
          <span>qorua.com</span>
        </div>
      </footer>
    </div>
  );
}
