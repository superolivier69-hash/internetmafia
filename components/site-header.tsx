"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { categories } from "@/lib/content"
import { Logo } from "@/components/logo"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-6">
        <Link href="/" aria-label="InternetMafia home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="transition-colors hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/best-vpn"
            className="hidden sm:inline-flex items-center bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
          >
            Best VPN 2026
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex size-10 items-center justify-center border text-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b py-4 text-lg font-medium last:border-0"
                >
                  {c.name}
                  <span className="font-mono text-xs text-muted-foreground">{c.code}</span>
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                href="/best-vpn"
                onClick={() => setOpen(false)}
                className="flex justify-center bg-accent px-4 py-3 font-mono text-sm font-bold uppercase tracking-widest text-accent-foreground"
              >
                Best VPN 2026
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
