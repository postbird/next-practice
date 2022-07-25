import { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Head>
        <title>Page</title>
      </Head>
      <h1>Page</h1>
    </div>
  );
};

export default Page;

// // Error: getStaticPaths is only allowed for dynamic SSG pages and was found on '/docs/page'.
// export const getStaticPaths: GetStaticPaths = () => {
//   return { paths: ['/docs/page'], fallback: false };
// };
