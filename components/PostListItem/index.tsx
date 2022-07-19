import { List } from 'antd';
import Image from 'next/image';
import { IPost } from '../../types';

export const PostListItem: React.FC<{ item: IPost }> = ({ item }) => {
  return (
    <List.Item key={item.id} style={{ marginBottom: 32 }}>
      <List.Item.Meta
        avatar={
          <Image
            src="/images/post.png"
            width="80"
            height="50"
            alt={item.title}
          />
        }
        title={item.title}
        description={item.date}
      />
      {item?.content?.substring(0, 100)}...
    </List.Item>
  );
};
