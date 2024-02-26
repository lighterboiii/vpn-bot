import HomePage from '../../pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from '../../pages/Profile/Profile';
import PurchasePage from '../../pages/Purchase/Purchase';
import { homeUrl, signinUrl, signupUrl, profileUrl, purchaseUrl } from '../../utils/routes';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SignUpPage from '../../pages/Signup/Signup';
import SignInPage from '../../pages/SignIn/Signin';
import styles from './App.module.scss';
import { useEffect } from 'react';
import useTelegram from '../../services/hooks/useTelegram';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className={styles.app}>
      <Router basename={process.env.PUBLIC_URL}>
        {/* <div className={styles.nav}>
          <p className={styles.nav__text}>Для удобства тут расположу ссылки на все маршруты</p>
          <nav className={styles.nav__container}>
            <Link className={styles.nav__link} to={signinUrl}>Вход</Link>
            <Link className={styles.nav__link} to={signupUrl}>Регистрация</Link>
            <Link className={styles.nav__link} to={homeUrl}>Домашняя</Link>
            <Link className={styles.nav__link} to={profileUrl}>Профиль</Link>
            <Link className={styles.nav__link} to={purchaseUrl}>Оплата</Link>
          </nav>
        </div> */}
        <Routes>
          <Route path={signinUrl} element={<ProtectedRoute children={<SignInPage />} notAuth />} />
          <Route path={signupUrl} element={<ProtectedRoute children={<SignUpPage />} notAuth />} />
          <Route path={homeUrl} element={<ProtectedRoute children={<HomePage />} notAuth />} />
          <Route path={profileUrl} element={<ProtectedRoute children={<ProfilePage />} notAuth />} />
          <Route path={purchaseUrl} element={<ProtectedRoute children={<PurchasePage />} notAuth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
