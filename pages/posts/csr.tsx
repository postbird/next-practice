import { Button, Skeleton } from 'antd';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetchPostList } from '../../apis/posts';
import { Layout, PostList } from '../../components';

const LIST_API = '/posts/list';

const CSRPostsPage: NextPage = () => {
  const { data, mutate, isValidating } = useSWR(LIST_API, fetchPostList);

  return (
    <Layout>
      <Button type="primary" onClick={() => mutate()} loading={isValidating}>
        Refresh
      </Button>
      <Skeleton active loading={isValidating}>
        <PostList posts={data} />
      </Skeleton>
    </Layout>
  );
};

export default CSRPostsPage;
