import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { articles, getArticle, getCategory, sortedArticles, type Block } from "@/lib/content"
import { ArticleMeta, ArticleRow } from "@/components/article-card"
import { PartnerCta } from "@/components/partner-cta"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.dek,
    openGraph: { title: article.title, description: article.dek, images: [article.image], type: "article" },
  }
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-bold tracking-tight md:text-3xl">{block.text}</h2>
    case "quote":
      return (
        <blockquote className="my-10 border-l-4 border-accent pl-6 text-2xl font-bold leading-snug text-balance">
          {block.text}
        </blockquote>
      )
    case "list":
      return (
        <ul className="mt-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed">
              <span className="mt-1 font-mono text-sm text-accent" aria-hidden>
                {">"}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return <p className="mt-6 text-lg leading-relaxed text-foreground/85">{block.text}</p>
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const category = getCategory(article.category)
  const related = sortedArticles.filter((a) => a.slug !== article.slug).slice(0, 4)

  return (
    <article>
      <header className="mx-auto max-w-4xl px-4 pt-12 md:px-6 md:pt-20">
        <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link href={`/category/${article.category}`} className="text-accent hover:underline">
            {category?.name}
          </Link>
        </nav>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">{article.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground text-pretty">{article.dek}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y py-4">
          <p className="text-sm">
            By <span className="font-bold">{article.author}</span>
          </p>
          <ArticleMeta article={article} />
        </div>
      </header>

      <div className="grain relative mx-auto mt-10 aspect-[21/9] max-w-6xl overflow-hidden bg-muted md:px-0">
        <Image src={article.image || "/placeholder.svg"} alt={article.imageAlt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="object-cover" />
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {article.promo && (
            <p className="mb-8 border bg-card p-4 font-mono text-xs leading-relaxed text-muted-foreground">
              Disclosure: this article contains affiliate links. If you buy through them we may earn a commission, at no
              extra cost to you. It never affects our verdicts.{" "}
              <Link href="/disclosure" className="underline underline-offset-2 hover:text-foreground">
                Learn more
              </Link>
            </p>
          )}
          {article.body.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="flex flex-col gap-10 lg:sticky lg:top-24">
            <PartnerCta />
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                More from the files
              </h2>
              <div className="mt-2">
                {related.map((a, i) => (
                  <ArticleRow key={a.slug} article={a} index={i} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
