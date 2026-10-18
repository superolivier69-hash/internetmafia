import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affiliate Disclosure & Methodology",
  description: "How InternetMafia makes money, and how we test the products we review.",
}

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{"// Full Disclosure"}</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-balance">How we make money. No secrets.</h1>

      <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed text-foreground/85">
        <p>
          InternetMafia is reader-supported. When you buy a VPN or security product through some of our links, we may
          earn a commission — including a share of renewals with partners like NordVPN. You never pay more because of it.
        </p>
        <p>
          The name is a joke. The ethics aren&apos;t. Partners don&apos;t see our reviews before they&apos;re published,
          can&apos;t buy a ranking, and get dropped if they fail our tests. We recommend at least one provider that pays
          us nothing because it earned the spot.
        </p>
        <p>
          Affiliate links are marked with <code className="bg-muted px-1.5 py-0.5 font-mono text-base">rel=&quot;sponsored&quot;</code>{" "}
          and routed through <code className="bg-muted px-1.5 py-0.5 font-mono text-base">/go/</code> so you always know
          when you&apos;re clicking one.
        </p>
      </div>

      <h2 id="methodology" className="mt-16 scroll-mt-24 text-3xl font-bold tracking-tight">
        How we test
      </h2>
      <ul className="mt-6 flex flex-col gap-4 text-lg leading-relaxed">
        {[
          "We buy every subscription ourselves, anonymously where possible.",
          "We test for DNS, IPv6 and WebRTC leaks on every location we use.",
          "We force connection drops to verify kill switches actually work.",
          "We measure speeds against an unprotected baseline at peak times.",
          "We read audit reports in full and note what was — and wasn't — in scope.",
          "We re-test top picks at least twice a year.",
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span className="font-mono text-accent" aria-hidden>
              {">"}
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-16 border bg-card p-6 leading-relaxed text-muted-foreground">
        Our guides are for protecting your privacy and security. We don&apos;t help anyone break the law, and neither
        should your VPN.
      </p>
    </div>
  )
}
