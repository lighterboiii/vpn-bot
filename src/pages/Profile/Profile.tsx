import { FC, useState } from "react";
import styles from './Profile.module.scss';
import { signinUrl } from "../../utils/routes";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage: FC = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [subscriptionStatus, setSubscriptionStatus] = useState(true);

  return (
    <div className={styles.profile}>
        <p className={styles.profile__text}>Ваша подписка 
          <span className={subscriptionStatus ? styles.profile__subStatus : styles.profile__subStatusEnded}>
            {subscriptionStatus ? 
            ' активна' :
            ' закончилась'
            }
            </span> 
          {subscriptionStatus ? 
          ' до 05.08.2025' :
          ' 13.05.2023'
            }
            </p>
        <Link to='/pay' className={styles.profile__link}>Перейти к конфигурации</Link>
        <button
          type="button"
          onClick={() => navigate(signinUrl)}
          className={styles.profile__button}
        >
          Выход
        </button>
    </div>
  )
}

export default ProfilePage;