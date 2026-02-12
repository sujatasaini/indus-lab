'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function BookSuccessPage() {
  return (
    <Suspense fallback={<section className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-soft">Loading...</section>}>
      <BookSuccessContent />
    </Suspense>
  );
}

function BookSuccessContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId') || 'BK-DEMO';
  const fullName = searchParams.get('fullName') || 'Guest';
  const date = searchParams.get('date') || '-';
  const ticketType = searchParams.get('ticketType') || '-';
  const quantity = searchParams.get('quantity') || '1';

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-stone-200 bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-semibold">Booking Confirmed</h1>
      <p className="mt-2 text-muted">Thank you for reserving your visit.</p>
      <p className="mt-4 text-sm">
        <strong>Mock Booking ID:</strong> {bookingId}
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
        <li>Name: {fullName}</li>
        <li>Date: {date}</li>
        <li>Ticket: {ticketType}</li>
        <li>Quantity: {quantity}</li>
      </ul>
      <div className="mt-6">
        <Link href="/" className="text-sm underline underline-offset-4">
          Return Home
        </Link>
      </div>
    </section>
  );
}
