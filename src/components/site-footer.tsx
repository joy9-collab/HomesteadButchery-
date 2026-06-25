import logoAsset from "@/assets/homestead-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-[auto_1fr_1fr] sm:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 rounded-full ring-2 ring-primary/70"
          />
          <div>
            <div className="font-display text-2xl tracking-wide">HOMESTEAD</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Braai Cabin
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Trading Hours
          </div>
          <dl className="space-y-1 text-sm">
            <div className="flex justify-between gap-6"><dt>Mon – Fri</dt><dd className="font-mono">09h00 – 18h00</dd></div>
            <div className="flex justify-between gap-6"><dt>Saturday</dt><dd className="font-mono">08h30 – 15h00</dd></div>
            <div className="flex justify-between gap-6"><dt>Sunday</dt><dd className="font-mono text-muted-foreground">Closed</dd></div>
            <div className="flex justify-between gap-6"><dt>Public Holidays</dt><dd className="font-mono">08h30 – 15h00</dd></div>
          </dl>
        </div>
        <div>
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Visit / Order
          </div>
          <p className="text-sm text-muted-foreground">
            Walk in for fresh cuts, daily grills, and braai favourites. Loyalty cardholders
            get exclusive monthly specials on premium beef.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} Homestead Braai Cabin ™
      </div>
    </footer>
  );
}
