import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { articlesInCategory, categories, getCategory } from "@/lib/content"
import { ArticleCard } from "@/components/article-card"
import { PartnerCta } from "@/components/partner-cta"

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return { title: category.name, description: category.description }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const list = articlesInCategory(slug)

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <header className="border-b py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{category.code}</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">{category.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{category.description}</p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:col-span-8">
          {list.length === 0 ? (
            <p className="text-muted-foreground">No files yet. Check back soon.</p>
          ) : (
            list.map((article) => <ArticleCard key={article.slug} article={article} />)
          )}
        </div>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <PartnerCta />
          </div>
        </div>
      </div>
    </div>
  )
}
