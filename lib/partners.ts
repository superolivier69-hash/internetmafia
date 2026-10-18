export type Partner = {
  slug: string
  name: string
  verdict: string
  score: number
  bestFor: string
  jurisdiction: string
  affiliate: boolean
  fallbackUrl: string
  envKey?: string
  pros: string[]
  cons: string[]
  features: {
    audited: boolean
    ramOnly: boolean
    wireguard: boolean
    killSwitch: boolean
    streaming: boolean
    anonymousSignup: boolean
  }
}

export const partners: Partner[] = [
  {
    slug: "nordvpn",
    name: "NordVPN",
    verdict: "The all-rounder. Fast, independently audited, and loaded with extras most people actually use.",
    score: 9.4,
    bestFor: "Most people",
    jurisdiction: "Panama",
    affiliate: true,
    fallbackUrl: "https://nordvpn.com/",
    envKey: "NORDVPN_AFFILIATE_URL",
    pros: [
      "No-logs policy verified by repeated independent audits",
      "RAM-only servers wipe data on every reboot",
      "NordLynx (WireGuard-based) is consistently among the fastest we test",
      "Threat Protection blocks trackers, ads and malicious domains",
    ],
    cons: ["Renewal pricing is higher than the intro deal", "Desktop app can feel busy"],
    features: { audited: true, ramOnly: true, wireguard: true, killSwitch: true, streaming: true, anonymousSignup: false },
  },
  {
    slug: "proton-vpn",
    name: "Proton VPN",
    verdict: "The principled pick. Open-source apps, Swiss privacy law, and a genuinely usable free tier.",
    score: 9.0,
    bestFor: "Transparency purists",
    jurisdiction: "Switzerland",
    affiliate: true,
    fallbackUrl: "https://protonvpn.com/",
    envKey: "PROTONVPN_AFFILIATE_URL",
    pros: ["Fully open-source, audited apps", "Secure Core routes through hardened servers", "Free plan with no data cap"],
    cons: ["Premium tiers cost more than rivals", "Free servers get crowded"],
    features: { audited: true, ramOnly: false, wireguard: true, killSwitch: true, streaming: true, anonymousSignup: false },
  },
  {
    slug: "surfshark",
    name: "Surfshark",
    verdict: "The household plan. Unlimited simultaneous devices for the whole crew.",
    score: 8.7,
    bestFor: "Big households",
    jurisdiction: "Netherlands",
    affiliate: true,
    fallbackUrl: "https://surfshark.com/",
    envKey: "SURFSHARK_AFFILIATE_URL",
    pros: ["Unlimited simultaneous connections", "CleanWeb ad and tracker blocking", "RAM-only server network"],
    cons: ["Speeds less consistent on distant servers", "Fewer advanced controls"],
    features: { audited: true, ramOnly: true, wireguard: true, killSwitch: true, streaming: true, anonymousSignup: false },
  },
  {
    slug: "mullvad",
    name: "Mullvad",
    verdict: "The ghost. No email, no name — just an account number. Pay in cash if you want.",
    score: 8.9,
    bestFor: "Maximum anonymity",
    jurisdiction: "Sweden",
    affiliate: false,
    fallbackUrl: "https://mullvad.net/",
    pros: ["Account number instead of email", "Accepts cash and Monero", "Flat price, no upsells"],
    cons: ["Weak for streaming libraries", "No affiliate program — we just respect it"],
    features: { audited: true, ramOnly: true, wireguard: true, killSwitch: true, streaming: false, anonymousSignup: true },
  },
]

export const featuredPartner = partners[0]

export function getPartner(slug: string) {
  return partners.find((p) => p.slug === slug)
}

export function partnerHref(partner: Partner) {
  return partner.affiliate ? `/go/${partner.slug}` : partner.fallbackUrl
}
