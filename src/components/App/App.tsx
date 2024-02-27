import HomePage from '../../pages/Home/Home';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from '../../pages/Profile/Profile';
import PurchasePage from '../../pages/Subscription/Subscription';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={styles.app}>
      <Router basename={process.env.PUBLIC_URL}>
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
