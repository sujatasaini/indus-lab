import Link from 'next/link';

export default function BookSuccessPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const bookingId = typeof searchParams.bookingId === 'string' ? searchParams.bookingId : 'BK-DEMO';
  const fullName = typeof searchParams.fullName === 'string' ? searchParams.fullName : 'Guest';
  const date = typeof searchParams.date === 'string' ? searchParams.date : '-';
  const ticketType = typeof searchParams.ticketType === 'string' ? searchParams.ticketType : '-';
  const quantity = typeof searchParams.quantity === 'string' ? searchParams.quantity : '1';

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
