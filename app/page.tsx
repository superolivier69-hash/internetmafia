import Link from "next/link"
import { sortedArticles } from "@/lib/content"
import { Hero } from "@/components/home/hero"
import { Departments } from "@/components/home/departments"
import { FieldManual } from "@/components/home/field-manual"
import { ThreatTicker } from "@/components/threat-ticker"
import { SectionHeading } from "@/components/section-heading"
import { ArticleCard, ArticleRow } from "@/components/article-card"
import { VpnRankingCards } from "@/components/vpn-ranking"

export default function HomePage() {
  const [, second, third, fourth, ...rest] = sortedArticles

  return (
    <>
      <Hero />
      <ThreatTicker />

      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-6">
        <SectionHeading code="// Latest Dispatches" title="Fresh off the wire" />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ArticleCard article={second} size="lg" />
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5">
            <ArticleCard article={third} />
            <ArticleCard article={fourth} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <SectionHeading code="// The Family" title="VPNs we'd trust with our secrets" href="/best-vpn" linkLabel="Full rankings" />
        <VpnRankingCards />
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Some links are affiliate links. Rankings are set by testing, never by commission.{" "}
          <Link href="/disclosure" className="underline underline-offset-4 hover:text-foreground">
            How we make money
          </Link>
        </p>
      </section>

      <div className="mt-24">
        <Departments />
      </div>

      <div className="mt-24">
        <FieldManual />
      </div>

      <section className="mx-auto mt-24 max-w-7xl px-4 md:px-6">
        <SectionHeading code="// Archive" title="From the files" />
        <div className="grid gap-x-12 md:grid-cols-2">
          {rest.map((article, i) => (
            <ArticleRow key={article.slug} article={article} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
