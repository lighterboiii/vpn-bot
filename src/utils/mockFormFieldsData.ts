export const signUpPageFormFields = (values: any) => [
  { type: 'text', name: 'name', label: 'Имя', placeholder: 'Ваше имя', value: values.name.value },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'Введите email', value: values.email.value },
  { type: 'number', name: 'phone', label: 'Phone', placeholder: 'Номер телефона', value: values.phone.value },
  { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Пароль', value: values.password.value }
];

export const signInPageFormFields = (values: any) => [
  { type: 'email', name: 'email', label: 'Email', placeholder: 'Введите ваш email', value: values.email.value },
  { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Введите ваш пароль', value: values.password.value }
];