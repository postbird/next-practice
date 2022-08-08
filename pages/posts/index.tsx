import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import styles from './index.module.less';

const requireImg = require('../../public/images/large.jpg');

const remoteImg =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const localImg = '/images/large.jpg';

const Page: NextPage<{ posts: number[] }> = ({ posts }) => {
  return (
    <div className={styles.wrap}>
      <h1>Posts</h1>
      {/* {posts?.map((item) => (
        <div key={item}>
          <Image
            src={localImg}
            width={400}
            height={400}
            // layout="fill"
            alt={`post-${item}`}
          />
        </div>
      ))} */}
      {posts?.map((item) => (
        <Image src={requireImg} key={item} alt={`post-${item}`} priority />
      ))}
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
