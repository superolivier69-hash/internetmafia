const items = [
  "Turn on your VPN kill switch — today",
  "SMS 2FA is not enough: switch to passkeys",
  "Public Wi-Fi? Assume someone is listening",
  "Reused passwords are the #1 way accounts fall",
  "Encrypted DNS takes 30 seconds to enable",
  "Your ISP sees every domain you visit",
  "Data brokers must delete your info if you ask",
]

export function ThreatTicker() {
  return (
    <section aria-label="Threat wire" className="flex overflow-hidden border-y bg-accent text-accent-foreground">
      <p className="z-10 shrink-0 bg-foreground px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-background">
        Threat Wire
      </p>
      <div className="flex overflow-hidden">
        <ul className="animate-marquee flex shrink-0 items-center gap-10 whitespace-nowrap py-3 pl-10 font-mono text-xs font-bold uppercase tracking-widest">
          {[...items, ...items].map((item, i) => (
            <li key={i} aria-hidden={i >= items.length} className="flex items-center gap-10">
              {item}
              <span aria-hidden>{"///"}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
