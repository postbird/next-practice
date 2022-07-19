import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { Layout, PostListItem } from '../../components';
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
      <Skeleton active loading={isValidating} style={{ width: 700 }}>
        <List>
          {data?.map((item) => (
            <PostListItem item={item} key={item.id} />
          ))}
        </List>
      </Skeleton>
    </Layout>
  );
};

export default CSRPostsPage;
