import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';

type IPost = {
  title: string;
  date: string;
  //   errorProps: any;
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

export const getStaticProps: GetStaticProps = (ctx: GetStaticPropsContext) => {
  const post = {
    title: Math.random(),
    date: new Date().toString(),
    // errorProps: new Date(),
  };

  return {
    props: {
      post,
    },
  };
};
