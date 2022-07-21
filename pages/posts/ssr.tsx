import { GetServerSideProps, NextPage } from 'next';
import { fetchPostList } from '../../apis/posts';
import { Layout, PostList } from '../../components';
import { IPost } from '../../types';

const SSRPostsPage: NextPage<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <Layout>
      <h1>Posts From SSR</h1>
      <PostList posts={posts} />
    </Layout>
  );
};

export default SSRPostsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchPostList();
  return {
    props: {
      posts,
    },
  };
};
