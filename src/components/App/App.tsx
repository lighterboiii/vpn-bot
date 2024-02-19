import HomePage from '../../pages/Home/Home';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from '../../pages/Profile/Profile';
import PurchasePage from '../../pages/Purchase/Purchase';
import { homeUrl, signinUrl, signupUrl, profileUrl, purchaseUrl } from '../../utils/routes';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SignUpPage from '../../pages/Signup/Signup';
import SignInPage from '../../pages/SignIn/Signin';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <nav>
          <p>Для удобства тут расположу ссылки на все маршруты</p>
          <Link to={signinUrl}>Вход</Link>
          <Link to={signupUrl}>Регистрация</Link>
          <Link to={homeUrl}>Домашняя</Link>
          <Link to={profileUrl}>Личный кабинет</Link>
          <Link to={purchaseUrl}>Оплата</Link>
        </nav>
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
