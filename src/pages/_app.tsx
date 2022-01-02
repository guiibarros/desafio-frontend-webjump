import { AppProps } from 'next/app';

import { Header } from '../Components/Header';
import { CategoriesProvider } from '../Contexts/CategoriesContext';

import '../styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CategoriesProvider>
      <Header />
      <Component {...pageProps} />
    </CategoriesProvider>
  );
}