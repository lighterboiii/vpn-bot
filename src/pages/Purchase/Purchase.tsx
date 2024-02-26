import { FC } from "react";
import styles from './Purchase.module.scss';
import { useNavigate } from "react-router-dom";

const PurchasePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.purchase}>
      <h3 className={styles.purchase__title}>Выберите план:</h3>
      <div className={styles.purchase__grid}>
        <div>
          <img src="" alt="basic_plan_img" />
          <p>Базовый план 1999р/год</p>
        </div>
        <div>
          <img src="#" alt="premium_plan_img" />
          <p>Премиум план 4999р/год</p>
        </div>
      </div>
      <button
        type="button"
        className={styles.purchase__button}
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  )
};

export default PurchasePage;