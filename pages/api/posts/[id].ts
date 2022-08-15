import { IPosts } from '@/types';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const postList: IPosts = Array.from(new Array(100)).map((_, index) => {
    return {
      title: `Post_${index}`,
      content: `Content_${index}`,
      id: index + 1,
    };
  });
  res.status(200).send(await fs.readFile(path.resolve('./README.md')));
};

export default handler;
