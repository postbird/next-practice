import { PostItem } from '@/components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from './index.module.less';

const Page: NextPage = (props) => {
  const router = useRouter();
  console.log('router', router.query);

  return (
    <div className={styles.wrap}>
      <h1>Post Slug Page [id].tsx</h1>
      <PostItem />
    </div>
  );
};

export default Page;
