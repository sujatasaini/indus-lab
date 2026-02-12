export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">About the Exhibition</h1>
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold">Mission</h2>
        <p className="mt-2 text-muted">
          We preserve and reinterpret Indus script heritage through cultural education, public storytelling, and responsible AI research.
        </p>
      </section>
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold">Sujata Saini / スジャータ (researcher)</h2>
        <p className="mt-2 text-muted">
          Sujata&apos;s work explores script recognition, historical datasets, and human-centered AI interfaces for heritage contexts.
        </p>
      </section>
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold">What you&apos;ll experience</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
          <li>Immersive visual storytelling of Indus history timelines.</li>
          <li>Hands-on arts, crafts, and script-inspired design pieces.</li>
          <li>Research demonstrations including models, datasets, and books.</li>
        </ul>
      </section>
    </div>
  );
}
