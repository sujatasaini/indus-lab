import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { catalogItems } from '@/lib/data';

export function generateStaticParams() {
  return catalogItems.map((item) => ({ slug: item.slug }));
}

export default function CatalogDetailPage({ params }: { params: { slug: string } }) {
  const item = catalogItems.find((entry) => entry.slug === params.slug);

  if (!item) notFound();

  const related = catalogItems.filter((entry) => entry.category === item.category && entry.slug !== item.slug).slice(0, 3);

  return (
    <div className="space-y-8">
      <Link href="/catalog" className="text-sm underline underline-offset-4">
        Back to catalog
      </Link>
      <article className="grid gap-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-soft md:grid-cols-2">
        <Image src={item.image} alt={item.title} width={900} height={700} className="w-full rounded-2xl border border-stone-200" />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.category}</p>
          <h1 className="mt-2 text-3xl font-semibold">{item.title}</h1>
          <p className="mt-4 text-muted">{item.description}</p>
          <section className="mt-6 rounded-xl border border-stone-200 bg-stone-50 p-4">
            <h2 className="font-semibold">Why it matters</h2>
            <p className="mt-2 text-sm text-muted">{item.whyItMatters}</p>
          </section>
        </div>
      </article>
      <section>
        <h2 className="text-2xl font-semibold">Related items</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {related.map((entry) => (
            <Link key={entry.slug} href={`/catalog/${entry.slug}`} className="rounded-xl border border-stone-200 bg-white p-4 text-sm shadow-soft">
              {entry.title}
            </Link>
          ))}
          {!related.length && <p className="text-sm text-muted">No related items yet.</p>}
        </div>
      </section>
    </div>
  );
}
