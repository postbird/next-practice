import { List } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../../components';
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
        <List loading={posts?.length === 0}>
          {posts?.map((item) => (
            <List.Item key={item.id} style={{ marginBottom: 32 }}>
              <List.Item.Meta
                avatar={
                  <Image
                    src="/images/post.png"
                    width="80"
                    height="50"
                    alt={item.title}
                  />
                }
                title={item.title}
                description={item.date}
              />
              {item?.content?.substring(0, 100)}...
            </List.Item>
          ))}
        </List>
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
