import { FC, useState } from "react";
import styles from './Profile.module.scss';
import useTelegram from "../../services/hooks/useTelegram";
import { signinUrl } from "../../utils/routes";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const { user } = useTelegram();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [subscriptionStatus, setSubscriptionStatus] = useState(true);

  return (
    <div className={styles.profile}>
        <p>{user}</p>
        <p>Ваша подписка 
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
        <Link to='#' className={styles.profile__link}>Ссылка на конфиг?</Link>
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