import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './index.module.less';

const Page: NextPage<{ posts: number[] }> = ({ posts }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <h1>Posts: {count}</h1>
      <Image
        src="/images/large.jpg"
        alt="large"
        width={400}
        height={300}
        objectFit={'cover'}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/large.jpg" alt="xx" width={400} height={300} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ posts: number[] }> = () => {
  return {
    props: {
      posts: Array.from(new Array(100)).map((_, index) => index),
    },
  };
};

export default Page;
