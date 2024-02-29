/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './Signin.module.scss';
import useForm from '../../services/hooks/useForm';
import { profileUrl } from '../../utils/routes';
import { signInPageFormFields } from '../../utils/mockFormFieldsData';
import UniversalForm from '../../components/UniversalForm/UniversalForm';

const SignInPage: FC = () => {
  const navigate = useNavigate();
  const { values, handleChange } = useForm({
    email: { value: '' },
    password: { value: '' }
  });
  // не забыть про валидацию полей
  const fields = signInPageFormFields(values);

  const handleMainButtonClicked = () => {
    navigate(profileUrl);
  };

  return (
    <div className={styles.signin}>
      <h2 className={styles.signin__title}>Войти</h2>
      <UniversalForm
        fields={fields}
        handleSubmit={handleMainButtonClicked}
        handleChange={handleChange}
        mainButtonText='Войти'
      />
      <div className={styles.signin__links}>
        <p className={styles.signin__text}>Вы новый пользователь?
          <Link to="/signup" className={styles.signin__link}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  )
};

export default SignInPage;