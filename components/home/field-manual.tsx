const rules = [
  { title: "Encrypt the pipe", body: "Run an audited VPN with the kill switch on. Your ISP gets noise, not a browsing history." },
  { title: "Never reuse a password", body: "One vault, unique passwords everywhere, passkeys wherever they're offered." },
  { title: "Ditch SMS codes", body: "Authenticator apps or hardware keys. SIM-swap crews can't steal what isn't on your SIM." },
  { title: "Talk end-to-end", body: "Default to encrypted messengers. If the provider can read it, so can anyone who asks them." },
  { title: "Shrink your file", body: "Opt out of data brokers, use email aliases, and give apps the fewest permissions possible." },
]

export function FieldManual() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="grid gap-10 border bg-card p-6 md:p-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{"// The Code"}</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-balance">
            Five rules of the underground.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Forget the hacker movie stuff. These five habits stop the overwhelming majority of real-world attacks.
          </p>
        </div>
        <ol className="flex flex-col lg:col-span-8">
          {rules.map((rule, i) => (
            <li key={rule.title} className="flex gap-6 border-b py-5 first:pt-0 last:border-0 last:pb-0">
              <span className="font-mono text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg font-bold">{rule.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
