import { NextPage } from 'next';
import Head from 'next/head';

const BootstrapPage: NextPage = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Head>
        <title>Header</title>
      </Head>
      <h1>Bootstrap</h1>
    </div>
  );
};

export default BootstrapPage;
