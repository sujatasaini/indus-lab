'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ticketTypes } from '@/lib/data';

const dates = ['2026-03-06', '2026-03-07', '2026-03-08'];

export default function BookPage() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      date: String(formData.get('date') || ''),
      ticketType: String(formData.get('ticketType') || ''),
      quantity: String(formData.get('quantity') || ''),
      note: String(formData.get('note') || '').trim()
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.fullName) nextErrors.fullName = 'Full name is required.';
    if (!/^\S+@\S+\.\S+$/.test(payload.email)) nextErrors.email = 'Valid email is required.';
    if (!payload.date) nextErrors.date = 'Please choose a date.';
    if (!payload.ticketType) nextErrors.ticketType = 'Please select a ticket type.';
    if (!Number(payload.quantity) || Number(payload.quantity) < 1) nextErrors.quantity = 'Quantity must be at least 1.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const bookingId = `BK-${Date.now().toString(36).toUpperCase()}`;
    const params = new URLSearchParams({ ...payload, bookingId });
    router.push(`/book/success?${params.toString()}`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Book Tickets</h1>
      <section className="grid gap-4 md:grid-cols-3">
        {ticketTypes.map((ticket) => (
          <article key={ticket.id} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-soft">
            <h2 className="text-lg font-semibold">{ticket.name}</h2>
            <p className="mt-1 text-sm text-muted">{ticket.description}</p>
            <p className="mt-3 font-medium">{ticket.price}</p>
          </article>
        ))}
      </section>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft" noValidate>
        <label className="grid gap-1 text-sm">
          Full name
          <input name="fullName" aria-label="Full name" className="rounded-lg border border-stone-300 px-3 py-2" />
          {errors.fullName && <span className="text-xs text-red-700">{errors.fullName}</span>}
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input type="email" name="email" aria-label="Email" className="rounded-lg border border-stone-300 px-3 py-2" />
          {errors.email && <span className="text-xs text-red-700">{errors.email}</span>}
        </label>
        <label className="grid gap-1 text-sm">
          Date
          <select name="date" aria-label="Date selection" className="rounded-lg border border-stone-300 px-3 py-2">
            <option value="">Select a date</option>
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          {errors.date && <span className="text-xs text-red-700">{errors.date}</span>}
        </label>
        <label className="grid gap-1 text-sm">
          Ticket type
          <select name="ticketType" aria-label="Ticket type" className="rounded-lg border border-stone-300 px-3 py-2">
            <option value="">Select ticket type</option>
            {ticketTypes.map((ticket) => (
              <option key={ticket.id} value={ticket.name}>
                {ticket.name}
              </option>
            ))}
          </select>
          {errors.ticketType && <span className="text-xs text-red-700">{errors.ticketType}</span>}
        </label>
        <label className="grid gap-1 text-sm">
          Quantity
          <input type="number" min={1} defaultValue={1} name="quantity" aria-label="Quantity" className="rounded-lg border border-stone-300 px-3 py-2" />
          {errors.quantity && <span className="text-xs text-red-700">{errors.quantity}</span>}
        </label>
        <label className="grid gap-1 text-sm">
          Optional note
          <textarea name="note" rows={3} aria-label="Optional note" className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex w-fit rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-800"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
