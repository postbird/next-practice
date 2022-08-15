import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({
    cookie: req.cookies,
    query: req.query,
    body: req.body,
    headers: req.headers,
  });
};

export default handler;