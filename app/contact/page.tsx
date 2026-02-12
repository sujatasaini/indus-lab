'use client';

import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-sm text-muted">Email: hello@indus-exhibition.example</p>
      <p className="text-sm text-muted">Location: Tokyo, Japan</p>
      <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
        <label className="grid gap-1 text-sm">
          Name
          <input required name="name" className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input required type="email" name="email" className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          Message
          <textarea required name="message" rows={4} className="rounded-lg border border-stone-300 px-3 py-2" />
        </label>
        <button className="w-fit rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-800">
          Send Message
        </button>
      </form>
      {sent && (
        <p className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">Thanks! This is a demo submission success state.</p>
      )}
    </div>
  );
}
