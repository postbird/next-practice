import { List } from 'antd';
import { IPost } from '../../types';
import { PostListItem } from '../PostListItem';

export const PostList: React.FC<{ posts?: IPost[] }> = ({ posts }) => {
  return (
    <List itemLayout="vertical">
      {posts?.map((item) => (
        <PostListItem item={item} key={item.id} />
      ))}
    </List>
  );
};
