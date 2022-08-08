import { ReactNode } from 'react';

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <h1>Post Layout</h1>
      {children}
    </>
  );
};

export default DashboardLayout;
