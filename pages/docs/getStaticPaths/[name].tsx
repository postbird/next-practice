import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

type IPost = {
  title: string;
  createdAt: string;
};

type IProps = {
  post: IPost;
};

const Page: NextPage<IProps> = ({ post }) => {
  console.log('postpost', post);
  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Head>
        <title>getStaticPaths - {post.title}</title>
      </Head>
      <h1> {post.title}</h1>
      <p> {post.createdAt}</p>
    </div>
  );
};

export default Page;

type IRouteParam = {
  name: string;
  age: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postNames = ['a', 'b', 'c', 'd'];
  console.log('--->>>getStaticPaths', Date.now());
  return {
    paths: [{ params: { name: 'a' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<IProps, IRouteParam> = async ({
  params,
}) => {
  console.log('--->>>getStaticProps', Date.now());
  const post = {
    title: `Post-${JSON.stringify(params)}-${Math.random()}`,
    createdAt: new Date().toString(),
  };
  return {
    props: { post },
  };
};
