import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type Post = {
  title: string;
  createdAt: string;
};

type IPageProps = { post: Post };

const Page: NextPage<IPageProps> = ({ post }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Head>
        <title>ssr - {post.title}</title>
      </Head>
      <h1>Page: {post.title}</h1>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  ctx
) => {
  console.log('context', ctx);

  const post = {
    title: `title ${Math.random()}`,
    createdAt: new Date().toString(),
  };

  //   ctx.res.setHeader('X-Powered', 'oldman');
  //   ctx.res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

//   throw new Error('500 Error');

  return {
    props: new Promise((resolve) => {
      setTimeout(() => {
        resolve({ post });
      }, 0);
    }),
    // 重定向
    // redirect: {
    //   statusCode: 301,
    //   destination: '/docs/page',
    // },
    // notFound: true, // 返回 404
  };
};

// export const getStaticProps: GetStaticProps<IPageProps> = async () => {
//   const post = {
//     title: `getStaticProps ${Math.random()}`,
//     createdAt: new Date().toString(),
//   };

//   return {
//     props: { post },
//   };
// };
