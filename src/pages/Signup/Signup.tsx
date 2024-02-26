import { FC, FormEvent, useEffect } from "react";
import styles from './Signup.module.scss';
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../services/hooks/useForm";
import { signUpPageFormFields } from "../../utils/mockFormFieldsData";
import UniversalForm from "../../components/UniversalForm/UniversalForm";
import { profileUrl } from "../../utils/routes";
import useTelegram from "../../services/hooks/useTelegram";

const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const { values, handleChange } = useForm({
    name: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    password: { value: '' }
  }); // не забыть про валидацию полей
  const { tg } = useTelegram();
  console.log(values);
  const fields = signUpPageFormFields(values);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Регистрация',
    })
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      navigate(profileUrl);
    })

    return () => {
      tg.MainButton.hide();
    }
  }, []);

  useEffect(() => {
    if (!values.email || !values.password || !values.phone || !values.name) {
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
    <div className={styles.signup}>
      <h2 className={styles.signup__title}>Зарегистрируйтесь для продолжения</h2>
      <UniversalForm
        fields={fields}
        handleSubmit={onFormSubmit}
        handleChange={handleChange}
        buttonText='Регистрация'
      />
      <div className={styles.signup__linkContainer}>
        <p className={styles.signup__text}>Уже зарегистрированы?
          <Link to='/signin' className={styles.signup__link}> Войти</Link>
        </p>
      </div>
    </div>
  )
};

export default SignUpPage;