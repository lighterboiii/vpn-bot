/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { homeUrl, signinUrl } from '../../utils/routes';

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

/**
 * Компонент-обёртка для роутов. Проверяет наличие токена в localStorage
 * @param {boolean} notAuth нужна ли аутентификация для посещения страницы
*/

const ProtectedRoute: FC<TProtectedRoute> = ({
  children,
  notAuth = false,
}): JSX.Element => {
  const [token, setToken] = useState(false);


  useEffect(() => {
    if (token) {
      // прописать логику получения данных для авторизации
    }
  }, []);

  if (token && notAuth) {
    return <Navigate to={homeUrl} />;
  }

  if (!notAuth && !token) {
    return <Navigate to={signinUrl} />;
  }

  return children;
};

export default ProtectedRoute;