import Link from 'next/link';
import { Layout } from '../components';

const NotFound = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>404 Not Found</h1>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
