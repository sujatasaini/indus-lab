'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { sponsorshipTiers } from '@/lib/data';

const donationPresets = ['1000', '3000', '5000', '10000'];

export default function SupportPage() {
  const [mode, setMode] = useState<'donate' | 'sponsor'>('donate');
  const [selectedDonation, setSelectedDonation] = useState('3000');
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const receipt = `RC-${Date.now().toString(36).toUpperCase()}`;

    const params = new URLSearchParams({
      mode,
      amount: mode === 'donate' ? (selectedDonation === 'custom' ? String(formData.get('customAmount') || '0') : selectedDonation) : '',
      tier: mode === 'sponsor' ? String(formData.get('tier') || '') : '',
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      receipt
    });

    router.push(`/support/thanks?${params.toString()}`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Sponsor / Donate</h1>
      <div className="flex gap-2" role="tablist" aria-label="Support options">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'donate'}
          onClick={() => setMode('donate')}
          className={`rounded-full border px-4 py-2 text-sm ${mode === 'donate' ? 'border-ink bg-ink text-white' : 'border-stone-300 bg-white'}`}
        >
          Donate
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'sponsor'}
          onClick={() => setMode('sponsor')}
          className={`rounded-full border px-4 py-2 text-sm ${mode === 'sponsor' ? 'border-ink bg-ink text-white' : 'border-stone-300 bg-white'}`}
        >
          Sponsor
        </button>
      </div>
      <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        {mode === 'donate' ? (
          <section aria-label="Donation amounts" className="space-y-3">
            <h2 className="font-semibold">Choose a donation amount</h2>
            <div className="flex flex-wrap gap-2">
              {donationPresets.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedDonation(amount)}
                  className={`rounded-full border px-3 py-2 text-sm ${selectedDonation === amount ? 'border-ink bg-ink text-white' : 'border-stone-300 bg-white'}`}
                >
                  ¥{Number(amount).toLocaleString()}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelectedDonation('custom')}
                className={`rounded-full border px-3 py-2 text-sm ${selectedDonation === 'custom' ? 'border-ink bg-ink text-white' : 'border-stone-300 bg-white'}`}
              >
                Custom
              </button>
            </div>
            {selectedDonation === 'custom' && (
              <label className="grid gap-1 text-sm">
                Custom amount (JPY)
                <input name="customAmount" type="number" min={100} className="rounded-lg border border-stone-300 px-3 py-2" />
              </label>
            )}
          </section>
        ) : (
          <section aria-label="Sponsorship tiers" className="space-y-3">
            <h2 className="font-semibold">Select a sponsorship tier</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {sponsorshipTiers.map((tier) => (
                <label key={tier.id} className="rounded-xl border border-stone-200 p-4 text-sm">
                  <input type="radio" name="tier" value={tier.name} defaultChecked={tier.id === 'bronze'} className="mr-2" />
                  <span className="font-semibold">{tier.name}</span> <span className="text-muted">({tier.amount})</span>
                  <ul className="mt-2 list-disc pl-5 text-xs text-muted">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </label>
              ))}
            </div>
          </section>
        )}

        <label className="grid gap-1 text-sm">
          Name / Organization
          <input name="name" required aria-label="Name or Organization" className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input name="email" required type="email" aria-label="Email" className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          Message
          <textarea name="message" rows={3} aria-label="Message" className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>

        <button type="submit" className="rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-800">
          Submit Support
        </button>
      </form>
    </div>
  );
}
