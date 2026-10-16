import type { Metadata } from "next"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { partners, partnerHref } from "@/lib/partners"
import { VpnComparisonTable } from "@/components/vpn-ranking"
import { PartnerLink } from "@/components/partner-cta"

export const metadata: Metadata = {
  title: "Best VPN 2026: Tested and Ranked",
  description: "We bought, leak-tested and speed-tested the major VPNs. Here are the ones that actually keep your secrets.",
}

const faqs = [
  {
    q: "Is using a VPN legal?",
    a: "In most countries, yes. A handful restrict or ban them. A VPN doesn't make illegal activity legal — it protects your privacy, not your conduct.",
  },
  {
    q: "Does a VPN make me anonymous?",
    a: "No. It hides your traffic from your network and your IP from sites. Logging into accounts, cookies and browser fingerprinting can still identify you.",
  },
  {
    q: "Are free VPNs safe?",
    a: "Most aren't — if you aren't paying, your data often is. Proton VPN's free tier is a rare, trustworthy exception.",
  },
  {
    q: "How do you choose your rankings?",
    a: "Testing first, commission never. Mullvad ranks in our top four and pays us nothing.",
  },
]

export default function BestVpnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <header className="border-b py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{"// Updated October 2026"}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl">
          The best VPNs. No snitches.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We paid for every subscription, ran thousands of speed and leak tests, and read every audit report. Four
          providers made the cut.
        </p>
        <p className="mt-6 max-w-2xl border bg-card p-4 font-mono text-xs leading-relaxed text-muted-foreground">
          We earn commissions from some providers below. That never changes the order.{" "}
          <Link href="/disclosure" className="underline underline-offset-2 hover:text-foreground">
            Full disclosure
          </Link>
        </p>
      </header>

      <section aria-labelledby="compare-heading" className="mt-16">
        <h2 id="compare-heading" className="mb-6 text-3xl font-bold tracking-tight">
          Side by side
        </h2>
        <VpnComparisonTable />
      </section>

      <section aria-labelledby="ranked-heading" className="mt-20">
        <h2 id="ranked-heading" className="mb-6 text-3xl font-bold tracking-tight">
          The rankings
        </h2>
        <ol className="flex flex-col gap-6">
          {partners.map((p, i) => (
            <li key={p.slug} id={p.slug} className={`grid gap-8 border p-6 md:p-10 lg:grid-cols-12 ${i === 0 ? "border-accent/50 bg-card" : ""}`}>
              <div className="lg:col-span-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  #{i + 1} — Best for {p.bestFor.toLowerCase()}
                </p>
                <h3 className="mt-3 text-4xl font-bold">{p.name}</h3>
                <p className="mt-4 font-mono text-5xl font-bold text-accent">
                  {p.score.toFixed(1)}
                  <span className="text-lg text-muted-foreground">/10</span>
                </p>
                <PartnerLink
                  href={partnerHref(p)}
                  className={`mt-6 inline-flex w-full justify-center px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest ${
                    i === 0 ? "bg-accent text-accent-foreground hover:opacity-90" : "border hover:border-foreground"
                  }`}
                >
                  {p.affiliate ? `Get ${p.name}` : `Visit ${p.name}`}
                </PartnerLink>
                {!p.affiliate && <p className="mt-2 text-xs text-muted-foreground">No affiliate relationship.</p>}
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl leading-relaxed text-balance">{p.verdict}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent">The good</h4>
                    <ul className="mt-3 flex flex-col gap-2">
                      {p.pros.map((pro) => (
                        <li key={pro} className="flex gap-2 leading-relaxed">
                          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-danger">The catch</h4>
                    <ul className="mt-3 flex flex-col gap-2">
                      {p.cons.map((con) => (
                        <li key={con} className="flex gap-2 leading-relaxed text-muted-foreground">
                          <X className="mt-1 size-4 shrink-0 text-danger" aria-hidden />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="faq-heading" className="mt-20 grid gap-10 lg:grid-cols-12">
        <h2 id="faq-heading" className="text-3xl font-bold tracking-tight lg:col-span-4">
          Questions from the street
        </h2>
        <dl className="flex flex-col lg:col-span-8">
          {faqs.map((f) => (
            <div key={f.q} className="border-b py-6 first:pt-0">
              <dt className="text-lg font-bold">{f.q}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
