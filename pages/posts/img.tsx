import { Divider } from 'antd';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from './index.module.less';

const requireImg = require('../../public/images/large.jpg');

const remoteImg =
  'https://image-component.nextjs.gallery/_next/image?url=%2Fmountains.jpg&w=3840&q=100';
const localImg = '/images/large.jpg';

const Page: NextPage<{ posts: number[] }> = ({ posts }) => {
  return (
    <div className={styles.wrap}>
      <h1>固定宽度高度</h1>
      <Image src={remoteImg} width={600} height={100} alt={`post`} />
      <Divider />
      <h1>layout=fill</h1>
      <div style={{ position: 'relative', width: 600, height: 100 }}>
        <Image src={remoteImg} alt={`post`} layout="fill" />
      </div>
      <h1>layout=responsive</h1>
      <div style={{ width: 400 }}>
        <Image
          src={remoteImg}
          width={400}
          height={200}
          alt={`post`}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Page;
