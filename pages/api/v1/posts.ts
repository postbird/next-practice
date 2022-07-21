import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  console.log('req', req.query);
  res.status(200).json({
    data: {
      query: req.query,
      headers: req.headers,
      cookie: req.cookies,
      method: req.method,
    },
  });
};

export default handler;
