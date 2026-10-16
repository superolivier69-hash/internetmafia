import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-32 md:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-danger">Error 404 // File Redacted</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight">This page went dark.</h1>
      <p className="mt-4 text-lg text-muted-foreground">Either it never existed, or it&apos;s really good at hiding.</p>
      <Link
        href="/"
        className="mt-8 bg-accent px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-accent-foreground"
      >
        Back to base
      </Link>
    </div>
  )
}
