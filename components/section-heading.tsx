import Link from "next/link"

export function SectionHeading({
  code,
  title,
  href,
  linkLabel,
}: {
  code: string
  title: string
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b pb-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{code}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
          {linkLabel ?? "View all"} {"->"}
        </Link>
      )}
    </div>
  )
}
