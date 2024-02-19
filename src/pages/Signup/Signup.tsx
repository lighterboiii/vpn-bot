import { FC, useState } from "react";
import styles from './Signup.module.scss';
import { Link } from "react-router-dom";

const SignUpPage: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div className={styles.signup}>
      <h2 className={styles.signup__title}>Зарегистрируйтесь для продолжения</h2>
      <form className={styles.form}>
        <input type='text' name='name' value={name} placeholder='Имя'/>
        <input name='email' placeholder='Почта' value={email} />
        <input name='password' placeholder='Пароль' value={password} />
        <button type='submit' className={styles.signup__button}>Зарегистрироваться</button>
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