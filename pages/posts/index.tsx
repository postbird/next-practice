import { IPosts } from '@/types';
import { fetcher } from '@/utils';
import { Divider, Spin } from 'antd';
import { NextPage } from 'next';
import useSWR from 'swr';
import styles from './index.module.less';

const Page: NextPage = () => {
  const { data, error } = useSWR<{ list: IPosts }>('/api/posts/list', fetcher);

  return (
    <div className={styles.wrap}>
      <div>
        <h1>Post List</h1>
        <Divider />
      </div>
      {!data && !error ? <Spin /> : null}
      {data?.list?.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
