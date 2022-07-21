import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';
import { Layout } from '../../components';
import { posts } from '../../mocks';
import { IPost } from '../../types';
import styles from './index.module.css';

import Head from 'next/head';

const PostDetail: NextPage<{ post: IPost; postHtml: string }> = ({
  post,
  postHtml,
}) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Image
        src="/images/post.png"
        width={700}
        height={100}
        alt={post.title}
        className={styles.postCover}
      />
      <h1>{post.title}</h1>
      <p style={{ color: '#999', fontWeight: 500, fontStyle: 'italic' }}>
        {post.date}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: postHtml }}
        style={{ wordWrap: 'break-word' }}
      />
    </Layout>
  );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts.map((item) => `/posts/${item.id}`);
  console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params);
  const post = posts.find((item) => item.id === params?.id);

  let postHtml = '';

  if (post) {
    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(post.content);
    postHtml = processedContent.toString();
  }
  return {
    props: {
      post,
      postHtml,
    },
  };
};
