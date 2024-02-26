import React, { FC, FormEvent } from "react";
import styles from './UniversalForm.module.scss';

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
}

const UniversalForm: FC<IUniversalFormProps> = ({ fields, handleSubmit, handleChange }) => {
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
