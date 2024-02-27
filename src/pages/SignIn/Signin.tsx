/* eslint-disable react-hooks/exhaustive-deps */
import { FC, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './Signin.module.scss';
import useForm from '../../services/hooks/useForm';
import { profileUrl } from '../../utils/routes';
import { signInPageFormFields } from '../../utils/mockFormFieldsData';
import UniversalForm from '../../components/UniversalForm/UniversalForm';
import useTelegram from '../../services/hooks/useTelegram';

const SignInPage: FC = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const { values, handleChange } = useForm({
    email: { value: '' },
    password: { value: '' }
  });
  // не забыть про валидацию полей
  // сделать миксин стилей для формы или создать отдельный компонент
  console.log(values.email);
  const fields = signInPageFormFields(values);

  const handleMainButtonClicked = () => {
    navigate(profileUrl);
  }

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Войти',
    })
    tg.MainButton.show();
    tg.onEvent('mainButtonClicked', handleMainButtonClicked)

    return () => {
      tg.MainButton.hide();
      tg.offEvent('mainButtonClicked', handleMainButtonClicked)
    }
  }, []);

  useEffect(() => {
    if (!values.email || !values.password) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [values])

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(profileUrl);
  };

  return (
    <div className={styles.signin}>
      <h2 className={styles.signin__title}>Войти</h2>
      <UniversalForm
        fields={fields}
        handleSubmit={onFormSubmit}
        handleChange={handleChange}
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