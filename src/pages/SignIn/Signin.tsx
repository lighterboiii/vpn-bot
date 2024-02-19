import { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './Signin.module.scss';

const SignInPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.signin}>
      <h2 className={styles.signin__title}>Вход</h2>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <input name='email' value={email}required />
        <input name='password' value={password} required />
        <button type='submit'>Войти</button>
      </form>
      <div className={styles.signin__links}>
        <p className={styles.signin__text}>Вы новый пользователь?
          <Link to="/signup" className={styles.signin__link}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  )
};

export default SignInPage;