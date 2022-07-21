import { ModalProps } from 'antd';
import styles from './index.module.css';

const Modal: React.FC<ModalProps> = ({
  title = 'TEST Modal',
  onCancel,
  visible,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.wrap} onClick={(ev) => onCancel?.(ev)}>
      <h1>{title}</h1>
    </div>
  );
};

export default Modal;
