import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // res.redirect('/');
  //   res.redirect(404, '/posts');
  res.redirect(
    'https://ycpaxd5nlv.feishu.cn/wiki/wikcndfA1nfkFN4cy1Ah4X9Ucrc?wiki_all_space_view_source=space_sidebar'
  );
};

export default handler;
