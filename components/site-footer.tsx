import Link from "next/link"
import { categories } from "@/lib/content"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            The internet underground. Independent reporting on privacy, security and digital freedom — for people who
            would rather not be the product.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">Go dark. Stay legal.</p>
        </div>

        <nav aria-label="Departments" className="md:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Departments</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="The outfit" className="md:col-span-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Outfit</h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link href="/best-vpn" className="hover:text-accent">
                Best VPN rankings
              </Link>
            </li>
            <li>
              <Link href="/disclosure" className="hover:text-accent">
                Affiliate disclosure
              </Link>
            </li>
            <li>
              <Link href="/disclosure#methodology" className="hover:text-accent">
                How we test
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 font-mono text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
          <p>{"© 2026 InternetMafia.com. No actual mafia was involved."}</p>
          <p>
            We may earn a commission from partner links.{" "}
            <Link href="/disclosure" className="underline underline-offset-4 hover:text-foreground">
              Read the disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
