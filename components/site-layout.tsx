import Link from 'next/link';
import { ReactNode } from 'react';

const primary = [
  { href: '/', label: 'Home' },
  { href: '/book', label: 'Book' },
  { href: '/support', label: 'Sponsor/Donate' }
];

const secondary = [
  { href: '/catalog', label: 'Catalog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-paper/95 backdrop-blur">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            Indus Script Exhibition
          </Link>
          <div className="hidden items-center gap-5 text-sm md:flex">
            {primary.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline underline-offset-4">
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/support"
            className="rounded-full border border-ink bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            Donate
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            {secondary.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline underline-offset-4">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4" aria-label="Social links">
            <span>Instagram</span>
            <span>X</span>
            <span>YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
