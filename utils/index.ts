export const fetchPost = (id: string, timer: number = 1000): Promise<IPost> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetch id is ', id);
      const post = {
        title: Math.random().toString(),
        date: Date.now().toString(),
        id,
      };
      resolve(post);
    }, timer);
  });
};

export type IPost = {
  id: string;
  title: string;
  date: string;
};
