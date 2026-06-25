import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/homestead-logo.jpg.asset.json";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Homestead Braai Cabin logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full ring-2 ring-primary/70"
          />
          <span className="truncate">
            <span className="block font-display text-lg leading-none tracking-wide">
              HOMESTEAD
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Braai Cabin
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            hash="specials"
            className="hidden rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Specials
          </Link>
          <Link
            to="/menu"
            className="hidden rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Menu
          </Link>
          <Link
            to="/"
            hash="visit"
            className="hidden rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Visit
          </Link>
          <Link
            to="/menu"
            className="rounded-sm bg-primary px-4 py-2 font-display text-sm tracking-widest text-primary-foreground transition hover:opacity-90"
          >
            VIEW MENU
          </Link>
        </nav>
      </div>
    </header>
  );
}
