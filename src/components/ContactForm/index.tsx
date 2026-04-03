'use client';

import clsx from 'clsx';
import { FormEvent, useState } from 'react';

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void;
    };
  }
}

export const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>('');
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: data.get('company'),
          name: data.get('name'),
          mail: data.get('mail'),
          message: data.get('message'),
        }),
      });

      const json = await res.json();

      if (res.ok) {
        setError(false);
        form.reset();
        setResponseMessage(json.message);
        window.umami?.track('Contact Form Sent');
      } else {
        setError(true);
        setResponseMessage(json.message ?? 'Ein unbekannter Fehler ist aufgetreten.');
        window.umami?.track('Contact Form Error');
      }
    } catch {
      setError(true);
      setResponseMessage('Ein unbekannter Fehler ist aufgetreten.');
      window.umami?.track('Contact Form Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form w-full mt-2 md:mt-6">
      <form onSubmit={handleSubmit}>
        <div className="control mt-4 relative">
          <input
            name="company"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="firma"
          />
        </div>
        <div className="control mt-2 relative">
          <input
            name="name"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="name"
            required
          />
        </div>
        <div className="control mt-2 relative">
          <input
            name="mail"
            type="email"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="email"
            required
          />
        </div>
        <div className="mt-4 relative h-12 md:h-30">
          <textarea
            name="message"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white h-full"
            placeholder="nachricht"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className={clsx(
              'py-2 px-4 w-full border border-transparent font-bold text-white bg-fbit transition duration-150 ease-in-out',
              {
                'opacity-50 cursor-not-allowed': submitting,
                'valid focus:outline-none': !submitting,
              },
            )}
            disabled={submitting}
          >
            Formular absenden
          </button>
          {responseMessage && (
            <p
              className={`mt-2 text-sm ${
                error ? 'text-red-600' : 'text-green-fbit'
              }`}
            >
              {responseMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
