import Image from "next/image"
import Link from "next/link"
import { type Article, formatDate, getCategory } from "@/lib/content"

export function ArticleMeta({ article }: { article: Article }) {
  const category = getCategory(article.category)
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      <span className="text-accent">{category?.name}</span>
      <span aria-hidden>/</span>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden>/</span>
      <span>{article.readTime} min</span>
    </p>
  )
}

export function ArticleCard({ article, size = "md" }: { article: Article; size?: "md" | "lg" }) {
  return (
    <article className="group flex flex-col gap-4">
      <Link href={`/articles/${article.slug}`} className="grain relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.imageAlt}
          fill
          sizes={size === "lg" ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 100vw"}
          className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      </Link>
      <ArticleMeta article={article} />
      <h3 className={size === "lg" ? "text-3xl font-bold leading-tight text-balance md:text-4xl" : "text-xl font-bold leading-snug text-balance"}>
        <Link href={`/articles/${article.slug}`} className="decoration-accent decoration-2 underline-offset-4 group-hover:underline">
          {article.title}
        </Link>
      </h3>
      <p className="leading-relaxed text-muted-foreground text-pretty">{article.dek}</p>
    </article>
  )
}

export function ArticleRow({ article, index }: { article: Article; index: number }) {
  return (
    <article className="group flex gap-4 border-b py-5 last:border-0">
      <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold leading-snug text-balance">
          <Link href={`/articles/${article.slug}`} className="decoration-accent decoration-2 underline-offset-4 group-hover:underline">
            {article.title}
          </Link>
        </h3>
        <ArticleMeta article={article} />
      </div>
    </article>
  )
}
