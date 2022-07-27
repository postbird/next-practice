import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  if (!req.query.secret) {
    return res.status(401).json({ message: 'Forbidden' });
  }
  try {
    const postId = req.query.id;
    if (!postId) {
      throw new Error('post id required');
    }
    await res.revalidate(`/isr/${postId}`);
    res.status(200).json({
      code: 0,
      message: 'validate success',
    });
  } catch (err) {
    res.status(500).json({
      code: -1,
      message: err.message,
    });
  }
};

export default handler;
