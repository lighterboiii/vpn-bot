import HomePage from '../../pages/Home/Home';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from '../../pages/Profile/Profile';
import PurchasePage from '../../pages/Purchase/Purchase';
import { homePage, profilePage, purchasePage, signInPage, signUpPage } from '../../utils/routes';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SignUpPage from '../../pages/Signup/Signup';
import SignInPage from '../../pages/SignIn/Signin';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path={signInPage} element={<ProtectedRoute children={<SignInPage />} notAuth />} />
          <Route path={signUpPage} element={<ProtectedRoute children={<SignUpPage />} notAuth />} />
          <Route path={homePage} element={<ProtectedRoute children={<HomePage />} notAuth />} />
          <Route path={profilePage} element={<ProtectedRoute children={<ProfilePage />} notAuth />} />
          <Route path={purchasePage} element={<ProtectedRoute children={<PurchasePage />} notAuth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
