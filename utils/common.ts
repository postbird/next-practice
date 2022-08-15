export const sleep = (timer = 300) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(timer);
    }, timer);
  });
