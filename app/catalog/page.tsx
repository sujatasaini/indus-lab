'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { categoryFilters, catalogItems } from '@/lib/data';

export default function CatalogPage() {
  const [active, setActive] = useState<(typeof categoryFilters)[number]>('All');

  const items = useMemo(
    () => (active === 'All' ? catalogItems : catalogItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Virtual Catalog</h1>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Catalog category filters">
        {categoryFilters.map((category) => (
          <button
            key={category}
            className={`rounded-full border px-4 py-2 text-sm ${active === category ? 'border-ink bg-ink text-white' : 'border-stone-300 bg-white'}`}
            onClick={() => setActive(category)}
            type="button"
            role="tab"
            aria-selected={active === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.slug} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-soft">
            <Image
              src={item.image}
              alt={item.title}
              width={640}
              height={360}
              className="h-44 w-full rounded-xl border border-stone-200 object-cover"
            />
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">{item.category}</p>
            <h2 className="mt-1 text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
            <Link href={`/catalog/${item.slug}`} className="mt-3 inline-block text-sm underline underline-offset-4">
              View details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
