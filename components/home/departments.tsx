import Link from "next/link"
import { categories, articlesInCategory } from "@/lib/content"
import { SectionHeading } from "@/components/section-heading"

export function Departments() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <SectionHeading code="// Departments" title="Pick your racket" />
      <ul className="grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/category/${c.slug}`} className="group flex h-full flex-col bg-background p-6 transition-colors hover:bg-card">
              <span className="font-mono text-xs text-muted-foreground">{c.code}</span>
              <span className="mt-8 text-xl font-bold group-hover:text-accent">{c.name}</span>
              <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</span>
              <span className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {articlesInCategory(c.slug).length} files {"->"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
