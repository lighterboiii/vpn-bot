import { FC } from "react";
import styles from './Signup.module.scss';
import { Link } from "react-router-dom";
import useForm from "../../services/hooks/useForm";

const SignUpPage: FC = () => {
  const { values, handleChange } = useForm({
    name: { value: '' },
    email: { value: '' },
    password: { value: '' }
  }); // не забыть про валидацию полей
  console.log(values);
  return (
    <div className={styles.signup}>
      <h2 className={styles.signup__title}>Зарегистрируйтесь для продолжения</h2>
      <form className={styles.form}>
        <input
          type='text'
          name='name'
          value={values.name.value}
          placeholder='Имя'
          onChange={handleChange}
          className={styles.form__input}
        />
        <input
          name='email'
          placeholder='Почта'
          value={values.email.value}
          onChange={handleChange}
          className={styles.form__input}
        />
        <input
          name='password'
          placeholder='Пароль'
          value={values.password.value}
          onChange={handleChange}
          className={styles.form__input}
        />
        <button
          type='submit'
          className={styles.form__button}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className={styles.signup__linkContainer}>
        <p className={styles.signup__text}>Уже зарегистрированы?
          <Link to='/signin' className={styles.signup__link}> Войти</Link>
        </p>
      </div>
    </div>
  )
};

export default SignUpPage