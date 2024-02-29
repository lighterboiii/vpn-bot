import { FC } from "react";
import styles from './Card.module.scss';
import { TSubscription } from "../../types/types";

interface ICard {
  handleClick: (item: TSubscription) => void;
  item: TSubscription;
}

const Card: FC<ICard> = ({ handleClick, item }) => {
  return (
    <div className={styles.card}>
        <button
          type="button"
          className={styles.card__button}
          onClick={() => handleClick(item)}
        >
          <p className={styles.card__name}>{item.name}</p>
          <p className={styles.card__price}>{item.price}</p>
        </button>
    </div>
  )
};

export default Card;