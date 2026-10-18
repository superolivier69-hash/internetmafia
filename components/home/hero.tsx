import Image from "next/image"
import Link from "next/link"
import { sortedArticles } from "@/lib/content"
import { ArticleMeta } from "@/components/article-card"

export function Hero() {
  const lead = sortedArticles[0]
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 md:px-6 lg:grid-cols-12 lg:pt-20">
      <div className="flex flex-col justify-center lg:col-span-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{"// The Internet Underground"}</p>
        <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl">
          Go dark.
          <br />
          <span className="text-muted-foreground">Stay legal.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
          Straight talk on VPNs, surveillance, anonymity and digital rights. We test the tools, read the fine print and
          tell you who&apos;s actually keeping your secrets.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/best-vpn"
            className="bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
          >
            Find your VPN
          </Link>
          <Link
            href="/category/anonymity"
            className="border px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest transition-colors hover:border-foreground"
          >
            Read the Field Manual
          </Link>
        </div>
      </div>

      <article className="group relative lg:col-span-6">
        <Link href={`/articles/${lead.slug}`} className="grain relative block aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src="/images/hero.png"
            alt="Hooded figure lit by a monitor in a dark room"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 pt-24">
            <span className="mb-3 inline-block bg-danger px-2 py-1 font-mono text-xs font-bold uppercase tracking-widest text-foreground">
              Cover Story
            </span>
            <ArticleMeta article={lead} />
            <h2 className="mt-2 text-2xl font-bold leading-tight text-balance md:text-3xl">{lead.title}</h2>
          </div>
        </Link>
      </article>
    </section>
  )
}
