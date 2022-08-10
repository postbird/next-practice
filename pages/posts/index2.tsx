import { PostItem } from '@/components';
import { Button } from 'antd';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './index.module.less';

const Page: NextPage<{ posts: number[] }> = ({ posts }) => {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    router.push({ pathname: '/posts/create', query: { a: 'aa' } });
  };

  return (
    <div className={styles.wrap}>
      <h1>Posts: {count}</h1>
      <PostItem />
      <Link
        href={{ pathname: '/posts/create', query: { a: 1, from: '中文//' } }}
      >
        <Button type="primary" block style={{ margin: 32 }}>
          创建 Link
        </Button>
      </Link>

      <Button type="primary" block style={{ margin: 32 }} onClick={handleClick}>
        创建 Click useRouter
      </Button>
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
