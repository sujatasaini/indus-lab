import Image from 'next/image';
import Link from 'next/link';
import { Card, PrimaryButton, Section, SecondaryButton } from '@/components/ui';

const highlights = [
  { title: 'Virtual Catalog', href: '/catalog', text: 'Browse installations, crafts, books, and take-home goods.' },
  { title: 'Book Tickets', href: '/book', text: 'Reserve your preferred date with a simple guided form.' },
  { title: 'Sponsor/Donate', href: '/support', text: 'Help sustain cultural preservation and public education.' }
];

const featured = [
  'Sand Show Projection Table (Indus History)',
  'Indus Arts & Crafts',
  'Research Corner: My papers + research book'
];

const gallery = ['gallery-01.jpg', 'gallery-02.jpg', 'gallery-03.jpg', 'gallery-04.jpg', 'gallery-05.jpg', 'gallery-06.jpg'];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-soft md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Virtual Showcase</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Indus Script Exhibition</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Discover how AI research and design storytelling can preserve one of the world&apos;s oldest writing traditions.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton href="/catalog">Explore Catalog</PrimaryButton>
          <SecondaryButton href="/book">Book Ticket</SecondaryButton>
          <SecondaryButton href="/support">Sponsor Us</SecondaryButton>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title}>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
            <Link className="mt-4 inline-block text-sm underline underline-offset-4" href={item.href}>
              Open
            </Link>
          </Card>
        ))}
      </section>

      <Section title="Featured Experiences">
        <ul className="grid gap-3 md:grid-cols-3">
          {featured.map((item) => (
            <li key={item} className="rounded-xl border border-stone-200 bg-white p-4 text-sm shadow-soft">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Gallery Preview">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {gallery.map((name) => (
            <Image
              key={name}
              src={`/images/${name}`}
              alt="Exhibition gallery preview"
              width={240}
              height={160}
              className="h-24 w-full rounded-lg border border-stone-200 object-cover"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
