import { NextPage } from 'next';
import React from 'react';
import { Layout, PostList, PostListItem } from '../../components';
import { fetchPostList } from '../../apis/posts';
import { IPost } from '../../types';
import { List } from 'antd';

const SSRPostsPage: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>Posts From SSR</h1>
      <PostList posts={posts} />
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
