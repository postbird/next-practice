import { Button } from 'antd';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Layout } from '../../components';
// import { Modal } from '../../components/Modal';

const Modal = dynamic(() => import('../../components/Modal'));

const Page: NextPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <Button type="primary" onClick={() => setVisible(true)}>
        Show Modal
      </Button>
      {visible && <Modal visible onCancel={() => setVisible(false)} />}
    </Layout>
  );
};

export default Page;
