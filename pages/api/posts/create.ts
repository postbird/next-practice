import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', `login_token${Date.now()}=${Date.now()}`);
  res.json({
    cookie: req.cookies,
    query: req.query,
    body: req.body,
    headers: req.headers,
  });
};

export default handler;
