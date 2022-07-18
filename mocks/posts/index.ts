import fs from 'fs';
import path from 'path';
import { IPost } from '../../types';

export const posts: IPost[] = [
  {
    id: 'pre-render.md',
    date: '2022-07-12',
    title: 'Pre Rendering',
    content: fs
      .readFileSync(path.resolve('mocks/posts/pre-render.md'))
      .toString(),
  },
  {
    id: 'ssg-ssr.md',
    date: '2022-07-07',
    title: 'SSG SSR',
    content: fs.readFileSync(path.resolve('mocks/posts/ssg-ssr.md')).toString(),
  },
];
