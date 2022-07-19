import { List } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout, PostList, PostListItem } from '../../components';
import { posts } from '../../mocks';
import { IPost } from '../../types';
import styles from './index.module.css';

const PostPage: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Next Helloworld Posts Page</title>
        <link rel="icon" href="/images/logo.svg"></link>
      </Head>

      {/* <Script
        src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"
        onLoad={() => {
          console.log('script loaded', window.React);
        }}
      /> */}

      <div className={styles.wrap}>
        <h1>My Posts</h1>
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default PostPage;

export const getStaticProps = async () => {
  // const posts = await fetchPostList();
  return {
    props: {
      posts,
    },
  };
};
