import React from 'react';
import styles from './index.module.less';

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <h1>Next Page Layout</h1>
      {children}
    </div>
  );
};
