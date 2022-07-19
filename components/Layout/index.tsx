import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

const routes = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Posts-PreRender',
    path: '/posts',
  },
  {
    label: 'Posts-CSR',
    path: '/posts/csr',
  },
  {
    label: 'Posts-SSR',
    path: '/posts/ssr',
  },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Hello Next.js</h1>
      <div className={styles.linkWrap}>
        {routes.map((item) => (
          <div className={styles.link} key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
      <div className={styles.contentWrap}>{children}</div>
    </div>
  );
};
