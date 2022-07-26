import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';

import { Skeleton } from 'antd';
import { fetchPost, IPost } from './utils';

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
