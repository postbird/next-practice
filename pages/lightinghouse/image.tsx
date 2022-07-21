/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Image from 'next/image';

const Page: NextPage = () => {
  return (
    <Image src="/images/large.jpg" alt="biog" width="3048" height="2024" />
  );
};

export default Page;
