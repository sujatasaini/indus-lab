import Link from 'next/link';
import { ReactNode } from 'react';

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">{children}</article>;
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
    >
      {children}
    </Link>
  );
}
