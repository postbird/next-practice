import { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageLayout } from '../../components';
import { NextLayoutPage } from '../_app';

const Page: NextLayoutPage<{ posts: string[] }> = ({ posts }) => {
  return (
    <div>
      <h1>Post Page List</h1>
      <Link href="/posts/create">+ Create</Link>
      <p>list items</p>
      <ul>
        {posts?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Page.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export const getStaticProps: GetStaticProps<{ posts: string[] }> = () => {
  return {
    props: {
      posts: Array.from(new Array(100)).map((item) => Math.random().toString()),
    },
  };
};

export default Page;
