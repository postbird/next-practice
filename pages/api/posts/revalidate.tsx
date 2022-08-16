import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate(`/posts/${req.query.id}`);
    res.send({ code: -0, data: { id: req.query.id, msg: 'success' } });
  } catch (err) {
    res.send({ code: -1, msg: err.message });
  }
};

export default handler;
