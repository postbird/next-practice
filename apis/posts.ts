import { posts } from '../mocks';
import { IPost } from '../types';

export const fetchPostList = (): Promise<IPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 300);
  });
};
