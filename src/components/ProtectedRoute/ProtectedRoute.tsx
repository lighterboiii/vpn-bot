import { useEffect, FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { homePage, signInPage } from '../../utils/routes';

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

/**
 * Компонент-обёртка для роутов. Проверяет наличие токена в localStorage
 * @param {boolean} notAuth нужна ли аутентификация для посещения страницы
 * @example
 * <ProtectedRoute notAuth>
 *  <ChildComponent/>
 * </ProtectedRoute>
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
    return <Navigate to={homePage} />;
  }

  if (!notAuth && !token) {
    return <Navigate to={signInPage} />;
  }

  return children;
};

export default ProtectedRoute;