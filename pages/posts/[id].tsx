import { IPost } from '@/types';
import { Skeleton } from 'antd';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const Page: NextPage<{ post: IPost }> = ({ post }) => {
  if (!post) {
    return <Skeleton active loading />;
  }

  return (
    <>
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
      <h1>{post.content}</h1>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ post: IPost }> = () => {
  return {
    props: {
      post: {
        id: Math.floor(Math.random() * 100),
        title: Date.now().toString(),
        content: Date.now().toString(),
      } as IPost,
    },
  };
};

export default Page;
