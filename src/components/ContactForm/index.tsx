import clsx from 'clsx';
import { useFormik } from 'formik';
import { object, string } from 'yup';

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      company: '',
      name: '',
      mail: '',
      message: '',
    },
    validationSchema: object({
      company: string().notRequired(),
      name: string().required(),
      mail: string().email().required(),
      message: string().required(),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      // TODO: Implement form submitting
      console.log('Submit', values);
    },
  });

  return (
    <div className="contact-form w-full mt-12">
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
        <div className="control mt-4 relative">
          <input
            id="name"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="control mt-4 relative">
          <input
            id="mail"
            className="form-input block w-full sm:text-sm sm:leading-5 text-white"
            placeholder="email"
            value={formik.values.mail}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mt-4 relative h-36">
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
                'opacity-50 cursor-not-allowed': !formik.isValid,
                'valid focus:outline-none': formik.isValid,
              },
            )}
            disabled={!formik.isValid}
          >
            Formular absenden
          </button>
        </div>
      </form>
    </div>
  );
};
