/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, FormEvent, useCallback, useEffect } from "react";
import styles from './UniversalForm.module.scss';
import useTelegram from "../../services/hooks/useTelegram";

interface Field {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
}

interface IUniversalFormProps {
  fields: Field[];
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mainButtonText: string;
}

const UniversalForm: FC<IUniversalFormProps> = ({
  fields,
  handleSubmit,
  handleChange,
  mainButtonText
}) => {
  const { tg } = useTelegram();
  // функция отправки данных формы на сервер
  const onSendData = useCallback(() => {
    const data: { [key: string]: string } = {}
    fields.forEach((field) => {
      data[field.name] = field.value;
    });
    tg.sendData(JSON.stringify(data));
  }, [fields])
  // вешаем/сбрасываем обработчик событий на кнопке
  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])
  // задаем текст кнопке
  useEffect(() => {
    tg.MainButton.setParams({
      text: { mainButtonText }
    })
  }, [])
  // скрываем кнопку при хотя бы одном пустом поле
  useEffect(() => {
    const hasEmptyValue = fields.some((field) => field.value === '');
    if (hasEmptyValue) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [fields])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className={styles.form__group}>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={field.value}
            placeholder={field.placeholder}
            onChange={handleChange}
            className={styles.form__input}
          />
        </div>
      ))}
    </form>
  );
};

export default UniversalForm;
