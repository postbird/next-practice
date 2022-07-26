import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';

import { Skeleton } from 'antd';

type IPost = {
  id: string;
  title: string;
  date: string;
};

const Page: NextPage<{ post?: IPost }> = ({ post }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h1>getStaticProps</h1>
      <h2>{post?.title ? post.title : <Skeleton.Input active />}</h2>
      <p>{post?.date ? post.date : <Skeleton.Input active />}</p>
    </div>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths<{ id: string }> = () => {
  const ids = Array.from(new Array(1)).map((_, index) => index);
  return {
    paths: ids.map((item) => ({ params: { id: String(item) } })),
    // paths: [],
    fallback: 'blocking',
  };
};

const fetchPost = (id: string): Promise<IPost> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetch id is ', id);
      const post = {
        title: Math.random().toString(),
        date: Date.now().toString(),
        id,
      };
      resolve(post);
    }, 1000);
  });
};

export const getStaticProps: GetStaticProps<
  { post: IPost },
  { id: string }
> = async (ctx: GetStaticPropsContext) => {
  const id: string = ctx.params?.id as string;
  console.log('exec id is ', id);
  const post = await fetchPost(id);
  return {
    props: {
      post,
    },
  };
};
