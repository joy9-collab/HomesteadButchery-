import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Homestead Braai Cabin" },
      { name: "description", content: "Full menu: braai grills, burgers, rolls, wraps, platters, salads, kiddies, beverages, hot drinks and milkshakes. Prices in ZAR." },
      { property: "og:title", content: "Menu — Homestead Braai Cabin" },
      { property: "og:description", content: "Full braai menu with prices in ZAR." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-24">
        <header className="border-b border-border px-5 pb-14 pt-10 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              The Menu
            </div>
            <h1 className="font-display text-6xl tracking-tight sm:text-8xl">
              BRAAI CABIN<br />
              <span className="text-primary">PRICE LIST.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Everything we serve, in one place. Prices in South African Rand. Ask the counter
              about today's daily hot meal.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {menu.map((section) => (
              <section key={section.title} className="bg-background p-7">
                <header className="mb-6">
                  <div className="inline-block bg-primary px-3 py-1 font-display text-sm tracking-widest text-primary-foreground">
                    {section.title.toUpperCase()}
                  </div>
                  {section.note && (
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {section.note}
                    </p>
                  )}
                </header>
                <ul className="divide-y divide-border/60">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 py-3"
                    >
                      <span className="min-w-0 text-sm">{item.name}</span>
                      <span className="shrink-0 font-mono text-sm text-primary">
                        {item.price || "—"}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
