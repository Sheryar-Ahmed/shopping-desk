import '../styles/globals.css';
import Navigation from '../components/Navigation';

export default function App({ Component, pageProps }) {
  return <>
    <Navigation />
    <Component {...pageProps} />
  </>
}
