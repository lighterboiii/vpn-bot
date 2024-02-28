/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from "react";
import styles from './Profile.module.scss';
import { purchaseUrl, signinUrl } from "../../utils/routes";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import useTelegram from "../../services/hooks/useTelegram";

const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const { onAppClose } = useTelegram();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [subscriptionStatus, setSubscriptionStatus] = useState(true);
  // случайно генерируем статус подписки
  useEffect(() => {
    const randomStatus = Math.random() > 0.5;
    setSubscriptionStatus(randomStatus);
  }, []);

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
      <div className={styles.profile__buttons}>
        <Button handleClick={() => navigate(purchaseUrl)} text="Подписка" />
        <Button text="Выход" handleClick={onAppClose} />
      </div>
    </div>
  )
}

export default ProfilePage;