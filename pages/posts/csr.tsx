import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { Layout, PostList, PostListItem } from '../../components';
import useSWR, { useSWRConfig } from 'swr';
import { fetchPostList } from '../api/posts';
import { Button, List, Skeleton } from 'antd';

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
