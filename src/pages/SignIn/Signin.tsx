import { FC, FormEvent } from 'react';
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
  });// не забыть про валидацию полей
  // сделать миксин стилей для формы или создать отдельный компонент
  console.log(values);
  const fields = signInPageFormFields(values);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(profileUrl);
  };

  return (
    <div className={styles.signin}>
      <h2 className={styles.signin__title}>Вход</h2>
      <UniversalForm
        fields={fields}
        handleSubmit={onFormSubmit}
        handleChange={handleChange}
        buttonText='Войти'
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