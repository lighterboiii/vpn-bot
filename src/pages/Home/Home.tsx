import { FC } from "react";
import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import { signinUrl, signupUrl } from "../../utils/routes";
import useTelegram from "../../services/hooks/useTelegram";

const HomePage: FC = () => {
  const { user } = useTelegram();

  console.log(user);
  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <h2 className={styles.home__title}>{`Привет ${user?.username}`}</h2>
        <p className={styles.home__text}>Описание нашего сервиса, бла бла бла, туда сюда, вот тут вот так. Платите нам деньги</p>
      </div>
      <nav className={styles.home__links}>
        <button className={styles.home__button}><Link to={signinUrl} className={styles.home__link}>Войти</Link></button>
        <button className={styles.home__button}><Link to={signupUrl} className={styles.home__link}>Регистрация</Link></button>
      </nav>
    </div>
  )
}

export default HomePage;