import { IPosts } from '@/types';
import { sleep } from '@/utils';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  const postList: IPosts = Array.from(new Array(100)).map((_, index) => {
    return {
      title: `Post_${index}`,
      content: `Content_${index}`,
      id: index + 1,
    };
  });
  await sleep(300);
  res.status(200).json({ list: postList });
};

export default handler;
