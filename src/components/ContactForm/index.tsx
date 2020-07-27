import axios from 'axios';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { object, string } from 'yup';

import { useMatomo } from '@@/hooks';
import { ContactMessage } from '@@/lib/types';

export const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>('');
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const matomo = useMatomo();

  const formik = useFormik({
    initialValues: {
      company: '',
      name: '',
      mail: '',
      message: '',
    } as ContactMessage,
    validationSchema: object({
      company: string().notRequired(),
      name: string().required(),
      mail: string().email().required(),
      message: string().required(),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setSubmitting(true);
      axios
        .post('/api/contact', {
          company: values.company,
          name: values.name,
          mail: values.mail,
          message: values.message,
        })
        .then((response) => {
          setError(false);
          formik.resetForm();
          setResponseMessage(response.data.message);
          matomo.trackEvent('contact', 'sent');
        })
        .catch((error) => {
          setError(true);
          if (error.response.data.message)
            setResponseMessage(error.response.data.message);
          else setResponseMessage('Ein unbekannter Fehler ist aufgetreten.');
          matomo.trackEvent('contact', 'error');
        })
        .finally(() => setSubmitting(false));
    },
  });

  const submitDisabled = !formik.isValid || submitting;

  return (
    <div className="contact-form w-full mt-2 md:mt-6">
      <form onSubmit={formik.handleSubmit}>
        <div className="control mt-4 relative">
          <input
            id="company"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="firma"
            value={formik.values.company}
            onChange={formik.handleChange}
          />
        </div>
        <div className="control mt-2 relative">
          <input
            id="name"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="control mt-2 relative">
          <input
            id="mail"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="email"
            value={formik.values.mail}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mt-4 relative h-12 md:h-30">
          <textarea
            id="message"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white h-full"
            placeholder="nachricht"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className={clsx(
              'py-2 px-4 w-full border border-transparent font-bold text-white bg-fbit transition duration-150 ease-in-out',
              {
                'opacity-50 cursor-not-allowed': submitDisabled,
                'valid focus:outline-none': !submitDisabled,
              },
            )}
            disabled={submitDisabled}
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
