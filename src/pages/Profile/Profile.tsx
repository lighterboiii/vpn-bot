import { FC } from "react";
import styles from './Profile.module.scss';

const ProfilePage: FC = () => {
  return (
    <div className={styles.profile}>
      <div>
        <p>Имя</p>
        <p>Состояние подписки</p>
        <p>Ссылка на конфиг?</p>
        <button>Выход</button>
      </div>
    </div>
  )
}

export default ProfilePage;