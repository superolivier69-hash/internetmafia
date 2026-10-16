import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { featuredPartner, partnerHref } from "@/lib/partners"

export function PartnerLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a href={href} target="_blank" rel="sponsored noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export function PartnerCta() {
  const partner = featuredPartner
  return (
    <aside aria-label={`${partner.name} recommendation`} className="border border-accent/40 bg-card p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">The Family Recommends</p>
      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{partner.name}</h2>
        <span className="font-mono text-2xl font-bold text-accent">{partner.score.toFixed(1)}</span>
      </div>
      <p className="mt-3 leading-relaxed text-muted-foreground">{partner.verdict}</p>
      <ul className="mt-5 flex flex-col gap-2 text-sm">
        {partner.pros.slice(0, 3).map((pro) => (
          <li key={pro} className="flex gap-2">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <span>{pro}</span>
          </li>
        ))}
      </ul>
      <PartnerLink
        href={partnerHref(partner)}
        className="mt-6 flex justify-center bg-accent px-4 py-3 font-mono text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
      >
        Get {partner.name}
      </PartnerLink>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Affiliate link — we may earn a commission at no cost to you.{" "}
        <Link href="/disclosure" className="underline underline-offset-2 hover:text-foreground">
          Details
        </Link>
      </p>
    </aside>
  )
}
