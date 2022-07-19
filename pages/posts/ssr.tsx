import { NextPage } from 'next';
import React from 'react';
import { Layout, PostListItem } from '../../components';
import { fetchPostList } from '../api/posts';
import { IPost } from '../../types';
import { List } from 'antd';

const SSRPostsPage: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>Posts From SSR</h1>
      <List>
        {posts?.map((item) => (
          <PostListItem item={item} key={item.id} />
        ))}
      </List>
    </Layout>
  );
};

export default SSRPostsPage;

export const getServerSideProps = async () => {
  const posts = await fetchPostList();
  return {
    props: {
      posts,
    },
  };
};
