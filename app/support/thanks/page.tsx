import Link from 'next/link';

export default function SupportThanksPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const receipt = typeof searchParams.receipt === 'string' ? searchParams.receipt : 'RC-DEMO';
  const mode = typeof searchParams.mode === 'string' ? searchParams.mode : 'donate';
  const amount = typeof searchParams.amount === 'string' ? searchParams.amount : '';
  const tier = typeof searchParams.tier === 'string' ? searchParams.tier : '';

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-semibold">Thank You for Your Support</h1>
      <p className="mt-2 text-muted">Your contribution strengthens preservation, research, and outreach.</p>
      <p className="mt-4 text-sm">
        <strong>Mock Receipt Number:</strong> {receipt}
      </p>
      <p className="mt-2 text-sm text-muted">{mode === 'sponsor' ? `Sponsorship Tier: ${tier}` : `Donation Amount: ¥${amount || '0'}`}</p>
      <Link href="/support" className="mt-6 inline-block text-sm underline underline-offset-4">
        Back to support options
      </Link>
    </section>
  );
}
