import { FC } from "react";
import styles from './Card.module.scss';

interface ICard {
  handleClick: any
  item: any;
}

const Card: FC<ICard> = ({ handleClick, item }) => {
  return (
    <div className={styles.card}>
        <button
          type="button"
          className={styles.card__button}
          onClick={() => handleClick(item)}
        >
          {/* <img src="" alt="premium_plan_img" /> */}
          <p className={styles.card__name}>{item.name}</p>
          <p className={styles.card__price}>{item.price}</p>
        </button>
    </div>
  )
};

export default Card;