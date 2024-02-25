export const signUpPageFormFields = (values: any) => [
  { type: 'text', name: 'name', label: 'Имя', placeholder: 'Введите ваше имя', value: values.name.value },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'Введите ваш email', value: values.email.value },
  { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Введите ваш пароль', value: values.password.value }
];

export const signInPageFormFields = (values: any) => [
  { type: 'email', name: 'email', label: 'Email', placeholder: 'Введите ваш email', value: values.email.value },
  { type: 'password', name: 'password', label: 'Пароль', placeholder: 'Введите ваш пароль', value: values.password.value }
]