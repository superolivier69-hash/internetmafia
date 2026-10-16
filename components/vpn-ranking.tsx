import { Check, Minus } from "lucide-react"
import { partners, partnerHref, type Partner } from "@/lib/partners"
import { PartnerLink } from "@/components/partner-cta"

const featureLabels: { key: keyof Partner["features"]; label: string }[] = [
  { key: "audited", label: "Audited no-logs" },
  { key: "ramOnly", label: "RAM-only servers" },
  { key: "wireguard", label: "WireGuard" },
  { key: "killSwitch", label: "Kill switch" },
  { key: "streaming", label: "Streaming" },
  { key: "anonymousSignup", label: "No-email signup" },
]

export function VpnRankingCards() {
  return (
    <ol className="grid gap-px border bg-border md:grid-cols-2 lg:grid-cols-4">
      {partners.map((p, i) => (
        <li key={p.slug} className={`flex flex-col bg-background p-6 ${i === 0 ? "lg:bg-card" : ""}`}>
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
            <span className="text-muted-foreground">Rank {String(i + 1).padStart(2, "0")}</span>
            {i === 0 && <span className="bg-accent px-2 py-1 font-bold text-accent-foreground">Top Pick</span>}
          </div>
          <h3 className="mt-6 text-2xl font-bold">{p.name}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">Best for: {p.bestFor}</p>
          <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{p.verdict}</p>
          <div className="mt-6 flex items-end justify-between border-t pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Score</span>
            <span className="font-mono text-3xl font-bold">
              {p.score.toFixed(1)}
              <span className="text-sm text-muted-foreground">/10</span>
            </span>
          </div>
          <PartnerLink
            href={partnerHref(p)}
            className={`mt-6 flex justify-center px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors ${
              i === 0
                ? "bg-accent text-accent-foreground hover:opacity-90"
                : "border text-foreground hover:border-foreground"
            }`}
          >
            {p.affiliate ? `Visit ${p.name}` : `Visit ${p.name} (no affiliate)`}
          </PartnerLink>
        </li>
      ))}
    </ol>
  )
}

export function VpnComparisonTable() {
  return (
    <div className="overflow-x-auto border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <caption className="sr-only">VPN feature comparison</caption>
        <thead className="bg-card font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <tr>
            <th scope="col" className="p-4 font-normal">
              Feature
            </th>
            {partners.map((p) => (
              <th key={p.slug} scope="col" className="p-4 font-bold text-foreground">
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <th scope="row" className="p-4 font-normal text-muted-foreground">
              Jurisdiction
            </th>
            {partners.map((p) => (
              <td key={p.slug} className="p-4">
                {p.jurisdiction}
              </td>
            ))}
          </tr>
          {featureLabels.map(({ key, label }) => (
            <tr key={key} className="border-t">
              <th scope="row" className="p-4 font-normal text-muted-foreground">
                {label}
              </th>
              {partners.map((p) => (
                <td key={p.slug} className="p-4">
                  {p.features[key] ? (
                    <Check className="size-4 text-accent" aria-label="Yes" />
                  ) : (
                    <Minus className="size-4 text-muted-foreground" aria-label="No" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t">
            <th scope="row" className="p-4 font-normal text-muted-foreground">
              Our score
            </th>
            {partners.map((p) => (
              <td key={p.slug} className="p-4 font-mono font-bold">
                {p.score.toFixed(1)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
