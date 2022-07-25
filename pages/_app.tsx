import 'antd/dist/antd.min.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }

export default MyApp;
