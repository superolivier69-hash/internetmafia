export type Category = {
  slug: string
  name: string
  code: string
  description: string
}

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }

export type Article = {
  slug: string
  title: string
  dek: string
  category: string
  author: string
  date: string
  readTime: number
  image: string
  imageAlt: string
  promo?: boolean
  body: Block[]
}

export const categories: Category[] = [
  {
    slug: "vpn",
    name: "VPNs",
    code: "DEPT-01",
    description: "Tunnels, protocols and the providers worth your money. Tested, not copy-pasted.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    code: "DEPT-02",
    description: "Threats, breaches and the boring habits that actually keep you off the leak lists.",
  },
  {
    slug: "anonymity",
    name: "Anonymity",
    code: "DEPT-03",
    description: "Tor, private browsers, burner identities and the art of leaving no trail.",
  },
  {
    slug: "digital-rights",
    name: "Digital Rights",
    code: "DEPT-04",
    description: "Surveillance law, encryption fights and who is reading your data — legally.",
  },
  {
    slug: "tools",
    name: "Tools",
    code: "DEPT-05",
    description: "Password managers, encrypted messengers and the rest of the kit.",
  },
]

export const articles: Article[] = [
  {
    slug: "best-vpn-2026-field-test",
    title: "We Ran Every Major VPN Through the Wringer. Here's Who Talks.",
    dek: "Four months, 30,000 speed tests and one very patient packet sniffer. The results on who keeps their mouth shut — and who doesn't.",
    category: "vpn",
    author: "Vinnie Packets",
    date: "2026-10-14",
    readTime: 14,
    image: "/images/cover-vpn.png",
    imageAlt: "Glowing network cables disappearing into a dark tunnel",
    promo: true,
    body: [
      {
        type: "p",
        text: "Every VPN on the market promises the same thing: no logs, military-grade encryption, total anonymity. Most of that is marketing. Some of it is true. Our job is to find out which is which.",
      },
      { type: "h2", text: "How we tested" },
      {
        type: "p",
        text: "We bought every subscription with our own money, ran them across five devices on three continents, and monitored traffic for DNS, IPv6 and WebRTC leaks. We read the audit reports in full, not just the press releases.",
      },
      {
        type: "list",
        items: [
          "Leak tests on every server location we connected to",
          "Kill switch tested by forcibly dropping the connection mid-download",
          "Speed measured against an unprotected baseline at peak hours",
          "Privacy policies and audit scopes read line by line",
        ],
      },
      { type: "h2", text: "The verdict" },
      {
        type: "p",
        text: "NordVPN came out on top for most people. Its no-logs claims have been independently audited multiple times, its servers run entirely in RAM, and NordLynx kept speeds close to our baseline. Proton VPN is the pick if open-source code matters to you. Mullvad wins on pure anonymity — you don't even need an email.",
      },
      {
        type: "quote",
        text: "A VPN doesn't make you anonymous. It moves your trust from your ISP to a company. Pick one that has proven it deserves it.",
      },
      {
        type: "p",
        text: "Whatever you choose, turn on the kill switch, use WireGuard-based protocols where available, and remember that a VPN is one layer — not the whole disguise.",
      },
    ],
  },
  {
    slug: "your-isp-is-selling-you",
    title: "Your ISP Knows Where You Were Last Night",
    dek: "Internet providers can see every domain you visit. In plenty of places, they're allowed to sell that history. Here's how to cut them out.",
    category: "vpn",
    author: "Sal Encrypto",
    date: "2026-10-11",
    readTime: 7,
    image: "/images/cover-surveillance.png",
    imageAlt: "Cluster of surveillance cameras on a concrete wall at night",
    promo: true,
    body: [
      {
        type: "p",
        text: "HTTPS hides what you do on a site. It doesn't hide which site you went to. Your DNS lookups and the server names in your connections are visible to whoever runs your network.",
      },
      { type: "h2", text: "What they can see" },
      {
        type: "list",
        items: [
          "Every domain you resolve through their DNS servers",
          "When you're online and how much data you move",
          "Which apps phone home, and how often",
        ],
      },
      { type: "h2", text: "How to go dark" },
      {
        type: "p",
        text: "Switch to encrypted DNS (DNS-over-HTTPS) in your browser today — it's free and takes thirty seconds. For full coverage across every app on every device, route your traffic through a reputable, audited VPN so your provider only sees an encrypted stream to one server.",
      },
      {
        type: "quote",
        text: "Your ISP doesn't need a warrant to look at metadata it already has.",
      },
    ],
  },
  {
    slug: "tor-browser-honest-guide",
    title: "The Honest Guide to Tor: What It Hides and What It Doesn't",
    dek: "Tor is the gold standard for anonymous browsing. It's also wildly misunderstood. A no-nonsense breakdown.",
    category: "anonymity",
    author: "Nico Onion",
    date: "2026-10-09",
    readTime: 11,
    image: "/images/cover-browser.png",
    imageAlt: "Hands typing on a keyboard in a dark room beside a mask",
    body: [
      {
        type: "p",
        text: "Tor bounces your traffic through three volunteer-run relays, encrypting it in layers. No single relay knows both who you are and where you're going. That's the magic — and it has limits.",
      },
      { type: "h2", text: "Where Tor shines" },
      {
        type: "list",
        items: [
          "Hiding your IP address from the sites you visit",
          "Hiding the sites you visit from your network operator",
          "Reaching .onion services, including major news outlets",
        ],
      },
      { type: "h2", text: "Where it fails" },
      {
        type: "p",
        text: "Log into your real accounts and you've identified yourself. Resize the window, install extensions or open downloaded documents while online and you leak fingerprints. Tor protects the pipe, not your behaviour.",
      },
      {
        type: "quote",
        text: "Anonymity is a discipline, not a download.",
      },
    ],
  },
  {
    slug: "password-manager-showdown",
    title: "Burn Your Sticky Notes: The Password Manager Showdown",
    dek: "Reused passwords are how most accounts actually get taken. We tested the vaults built to stop it.",
    category: "tools",
    author: "Tommy Two-Factor",
    date: "2026-10-06",
    readTime: 9,
    image: "/images/cover-rights.png",
    imageAlt: "Stack of redacted documents under a desk lamp",
    body: [
      {
        type: "p",
        text: "Credential stuffing — taking leaked passwords from one breach and trying them everywhere else — is still one of the most common ways accounts fall. A password manager ends that game.",
      },
      { type: "h2", text: "What to look for" },
      {
        type: "list",
        items: [
          "End-to-end, zero-knowledge encryption",
          "Published third-party security audits",
          "Passkey support and breach monitoring",
          "Cross-platform apps that you will actually use",
        ],
      },
      {
        type: "p",
        text: "Pair your vault with hardware-key or app-based two-factor authentication. SMS codes are better than nothing, but SIM-swap crews love them.",
      },
    ],
  },
  {
    slug: "encryption-backdoor-fight",
    title: "The War on Encryption Never Ended. It Just Got Quieter.",
    dek: "Governments keep asking for a key that only the good guys can use. Cryptographers keep explaining why that key doesn't exist.",
    category: "digital-rights",
    author: "Rosa Redacta",
    date: "2026-10-03",
    readTime: 12,
    image: "/images/cover-rights.png",
    imageAlt: "Classified documents covered in black redaction bars",
    body: [
      {
        type: "p",
        text: "Client-side scanning, lawful access, exceptional access — the names change, the ask doesn't. Each proposal requires weakening the encryption that protects banking, healthcare and journalists.",
      },
      { type: "h2", text: "Why a 'good guys only' backdoor fails" },
      {
        type: "p",
        text: "Any mechanism that lets one party bypass encryption is a vulnerability, and vulnerabilities get found. The math doesn't check a badge before it decrypts.",
      },
      {
        type: "quote",
        text: "There is no such thing as a door that only opens for the righteous.",
      },
      { type: "h2", text: "What you can do" },
      {
        type: "list",
        items: [
          "Use end-to-end encrypted messengers by default",
          "Support digital rights groups fighting these bills",
          "Contact your representatives when proposals surface",
        ],
      },
    ],
  },
  {
    slug: "public-wifi-opsec",
    title: "Coffee Shop OpSec: Surviving Public Wi-Fi",
    dek: "That free network might be run by the barista. Or the guy in the corner. Five-minute habits that keep you safe.",
    category: "cybersecurity",
    author: "Sal Encrypto",
    date: "2026-09-29",
    readTime: 6,
    image: "/images/cover-browser.png",
    imageAlt: "Hands on a keyboard lit only by screen glow",
    promo: true,
    body: [
      {
        type: "p",
        text: "Evil-twin hotspots — fake networks named to look like the real one — are cheap to set up and still work on tired travellers. Here's the routine.",
      },
      {
        type: "list",
        items: [
          "Confirm the exact network name with staff",
          "Turn off auto-join for open networks",
          "Connect your VPN before you open anything else",
          "Forget the network when you leave",
        ],
      },
      {
        type: "p",
        text: "A VPN with an always-on kill switch is the single biggest upgrade here: even if the hotspot is hostile, all it sees is encrypted noise.",
      },
    ],
  },
  {
    slug: "data-brokers-delete-yourself",
    title: "Erase Yourself: How to Get Off Data Broker Lists",
    dek: "Hundreds of companies sell your address, phone and relatives' names. Most are legally required to delete it if you ask.",
    category: "digital-rights",
    author: "Rosa Redacta",
    date: "2026-09-24",
    readTime: 10,
    image: "/images/cover-surveillance.png",
    imageAlt: "Security cameras watching from a concrete wall",
    body: [
      {
        type: "p",
        text: "People-search sites scrape public records, marketing lists and social media into neat dossiers. Opting out is tedious by design — but it works.",
      },
      { type: "h2", text: "The playbook" },
      {
        type: "list",
        items: [
          "Search your name on the biggest people-search sites",
          "Submit opt-out requests using a dedicated email alias",
          "Re-check every few months — listings come back",
          "Consider an automated removal service if you're short on time",
        ],
      },
    ],
  },
  {
    slug: "phishing-2026-tactics",
    title: "The Con Is Getting Better: Phishing Tactics to Watch",
    dek: "AI-written lures, cloned voices and QR-code traps. The scams evolved. Your instincts need to as well.",
    category: "cybersecurity",
    author: "Tommy Two-Factor",
    date: "2026-09-20",
    readTime: 8,
    image: "/images/cover-vpn.png",
    imageAlt: "Network cables glowing in darkness",
    body: [
      {
        type: "p",
        text: "Typos used to give phishing away. Now the grammar is perfect and the tone matches your boss. The tell has moved from the writing to the request.",
      },
      {
        type: "list",
        items: [
          "Urgency plus money or credentials is the red flag",
          "Verify through a channel you already trust",
          "Passkeys and hardware keys can't be phished the way passwords can",
          "Block known malicious domains at the DNS level",
        ],
      },
    ],
  },
]

export const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date))

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function articlesInCategory(slug: string) {
  return sortedArticles.filter((a) => a.category === slug)
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
