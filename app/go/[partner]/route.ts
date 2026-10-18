import { NextResponse } from "next/server"
import { getPartner } from "@/lib/partners"

export async function GET(request: Request, { params }: { params: Promise<{ partner: string }> }) {
  const { partner: slug } = await params
  const partner = getPartner(slug)

  if (!partner) {
    return NextResponse.redirect(new URL("/best-vpn", request.url), 302)
  }

  const affiliateUrl = partner.envKey ? process.env[partner.envKey] : undefined
  const destination = affiliateUrl && affiliateUrl.startsWith("https://") ? affiliateUrl : partner.fallbackUrl

  const response = NextResponse.redirect(destination, 302)
  response.headers.set("X-Robots-Tag", "noindex, nofollow")
  response.headers.set("Cache-Control", "no-store")
  return response
}
