import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/homestead-logo.jpg.asset.json";
import heroImg from "@/assets/hero-braai.jpg";
import boereworsImg from "@/assets/boerewors.jpg";
import meatsImg from "@/assets/meats.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { specials } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Homestead Braai Cabin — Butchery, Braai & Daily Grills" },
      { name: "description", content: "South African butchery and braai cabin. June mid-year specials on premium beef, full braai menu, trading hours and more." },
      { property: "og:title", content: "Homestead Braai Cabin" },
      { property: "og:description", content: "Premium cuts, daily grills, and South African braai favourites." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-16">
        <Hero />
        <Marquee />
        <Specials />
        <SignatureSplit />
        <Visit />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Thick beef steak searing on an open flame"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:pb-32 lg:pt-40">
        <div className="min-w-0">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Est. South Africa
          </div>
          <h1 className="font-display text-[14vw] leading-[0.85] tracking-tight sm:text-[110px] md:text-[140px] lg:text-[160px]">
            FIRE.<br />
            MEAT.<br />
            <span className="text-primary">FAMILY.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            A working butchery and braai cabin. Premium South African cuts over open flame,
            daily hot meals, and the kind of boerewors roll your oupa would approve of.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary px-6 py-4 font-display text-lg tracking-widest text-primary-foreground transition hover:opacity-90"
            >
              SEE THE MENU
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/"
              hash="specials"
              className="inline-flex items-center gap-2 border border-border bg-background/60 px-6 py-4 font-display text-lg tracking-widest text-foreground transition hover:border-primary"
            >
              JUNE SPECIALS
            </Link>
          </div>
        </div>

        <aside className="hidden self-end lg:block">
          <div className="relative">
            <img
              src={logoAsset.url}
              alt=""
              width={320}
              height={320}
              className="ml-auto h-72 w-72 rounded-full ring-4 ring-primary/60 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            />
            <div className="absolute -bottom-4 right-0 bg-primary px-4 py-2 font-display text-sm tracking-widest text-primary-foreground">
              SINCE THE FIRST FLAME
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["BRAAI", "BUTCHERY", "BOEREWORS", "BILTONG", "FLAMES", "FAMILY", "FRESH CUTS"];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-4">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap font-display text-3xl tracking-widest text-muted-foreground sm:text-4xl">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Specials() {
  return (
    <section id="specials" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="min-w-0">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              June Mid-Year Specials
            </div>
            <h2 className="font-display text-5xl tracking-tight sm:text-7xl">
              BUY 3kg<span className="text-primary">+</span><br />SAVE BIG.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Valid <span className="text-foreground">8 – 27 June 2026</span>. While stocks last.
            Loyalty cardholders only.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {specials.map((s) => (
            <li
              key={s.name}
              className="group relative grid gap-4 bg-background p-6 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl tracking-wide">{s.name}</h3>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary opacity-60 group-hover:opacity-100" />
              </div>
              <div className="flex items-baseline justify-between border-t border-border/60 pt-4">
                <span className="font-mono text-2xl text-primary">{s.price}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  3kg+
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SignatureSplit() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={meatsImg}
            alt="Aged ribeye and t-bone on dark slate with rosemary"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-14">
          <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
            The Counter
          </div>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            CUT TO ORDER.<br />COOKED ON FLAME.
          </h2>
          <p className="max-w-md text-muted-foreground">
            From the butcher's counter to the braai grid in steps — never paces. Rump,
            sirloin, T-bone, lamb chops, sosaties and our house boerewors. Pick your cut;
            we'll handle the fire.
          </p>
          <Link
            to="/menu"
            className="inline-flex w-fit items-center gap-2 border border-primary px-5 py-3 font-display text-sm tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            FULL MENU →
          </Link>
        </div>

        <div className="flex flex-col justify-center gap-6 p-8 sm:p-14 lg:order-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
            House Boerewors
          </div>
          <h2 className="font-display text-5xl tracking-tight sm:text-6xl">
            COILED. SPICED.<br />SMOKED LOW.
          </h2>
          <p className="max-w-md text-muted-foreground">
            Made in-house from a recipe that hasn't needed updating. Coriander-forward,
            beefy, with a crackle of fat on the bite. Available by the kilo or rolled hot.
          </p>
        </div>
        <div className="relative overflow-hidden lg:order-4">
          <img
            src={boereworsImg}
            alt="Coiled boerewors sizzling on a braai grill"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const days: [string, string][] = [
    ["Monday – Friday", "09h00 – 18h00"],
    ["Saturday", "08h30 – 15h00"],
    ["Sunday", "Closed"],
    ["Public Holidays", "08h30 – 15h00"],
  ];
  return (
    <section id="visit" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
            Visit
          </div>
          <h2 className="font-display text-5xl tracking-tight sm:text-7xl">
            COME<br />HUNGRY.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Pull up to the cabin. Order at the counter, sit by the fire, take it home wrapped
            and ready. We're not a fancy restaurant — we're a butchery that cooks.
          </p>
        </div>

        <div className="rounded border border-border bg-card p-8 sm:p-10">
          <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
            Trading Hours
          </div>
          <dl className="divide-y divide-border">
            {days.map(([d, h]) => (
              <div key={d} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4">
                <dt className="font-display text-xl tracking-wide">{d}</dt>
                <dd className="font-mono text-lg text-primary">{h}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
