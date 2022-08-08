import { Input } from 'antd';
import { NextPage } from 'next';
import { useState } from 'react';

const Page: NextPage = () => {
  const [title, setTitle] = useState<string>();
  return (
    <>
      <h1>Create Post</h1>
      <div>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
    </>
  );
};

export default Page;
