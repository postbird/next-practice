import 'antd/dist/antd.min.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { AppLayout } from '../components';
import '../styles/globals.css';

// 扩展 NextPage 属性
export type NextLayoutPage<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// 扩展 AppProps 中的 Component 属性为 NextLayoutPage
export type AppLayoutProps = AppProps & {
  Component: NextLayoutPage;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>;
}

// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }

export default MyApp;
