import { FC, FormEvent } from 'react';
import { Link } from "react-router-dom";
import styles from './Signin.module.scss';
import useForm from '../../services/hooks/useForm';

const SignInPage: FC = () => {
  const { values, handleChange } = useForm({
    email: { value: '' },
    password: { value: '' }
  });// не забыть про валидацию полей
  // сделать миксин стилей для формы или создать отдельный компонент
  console.log(values);
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.signin}>
      <h2 className={styles.signin__title}>Вход</h2>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <input
          name='email'
          value={values.email.value}
          placeholder='Логин'
          required
          onChange={handleChange}
        />
        <input
          name='password'
          value={values.password.value}
          placeholder='Пароль'
          required
          onChange={handleChange}
        />
        <button
          type='submit'
          className={styles.signin__button}>Войти</button>
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