import { FC } from "react";
import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import { signinUrl, signupUrl } from "../../utils/routes";

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <div>
        <h2>Какой то заголовок</h2>
        <p>Описание нашего сервиса, бла бла бла, туда сюда, вот тут вот так. Платите нам деньги</p>
      </div>
      <nav>
        <button><Link to={signinUrl}>Войти</Link></button>
        <button><Link to={signupUrl}>Регистрация</Link></button>
      </nav>
    </div>
  )
}

export default HomePage;