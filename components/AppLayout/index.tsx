import { Divider } from 'antd';
import React from 'react';
import styles from './index.module.less';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1>Next App Layout</h1>
        <Divider />
        {children}
        <Divider />
        <div>
          <p>Footer</p>
        </div>
      </div>
    </div>
  );
};
