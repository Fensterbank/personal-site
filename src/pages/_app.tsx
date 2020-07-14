import '../styles/style.scss';
import './tailwind.scss';
import { PageContextProvider } from '@@/context/FilterProvider';

function MyApp({ Component, pageProps }) {
  return (
    <PageContextProvider>
      <Component {...pageProps} />
    </PageContextProvider>
  );
}

export default MyApp;
