import { GetStaticProps, NextPage } from 'next';
import styles from './index.module.less';

const Page: NextPage<{ posts: number[] }> = ({ posts }) => {
  return (
    <div className={styles.wrap}>
      <h1>Posts</h1>
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
