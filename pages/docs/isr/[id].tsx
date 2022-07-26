import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';

type IPost = {
  title: string;
  date: string;
};

const Page: NextPage<{ post: IPost }> = ({ post }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <h1>getStaticProps</h1>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
    </div>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths<{ id: string }> = () => {
  const ids = Array.from(new Array(20)).map((_, index) => index);
  const result = {
    paths: ids.map((item) => ({ params: { id: String(item) } })),
    fallback: true,
  };
  return result;
};

export const getStaticProps: GetStaticProps<{ post: IPost }, { id: string }> = (
  ctx: GetStaticPropsContext
) => {
  const id = ctx.params?.id;
  console.log('id is ', id);
  const post = {
    title: Math.random().toString(),
    date: new Date().toString(),
  };

  return {
    props: {
      post,
    },
  };
};
