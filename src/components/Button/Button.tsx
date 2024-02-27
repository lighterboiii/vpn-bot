import { FC } from "react";
import styles from './Button.module.scss';

interface IButton {
  text: string;
  handleClick: () => void;
}

const Button: FC<IButton> = ({ text, handleClick }) => {
  return <button onClick={handleClick} className={styles.button}>{text}</button>
};

export default Button;