import { FC, useEffect } from "react";
import styles from './Home.module.scss';
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { signinUrl, signupUrl } from "../../utils/routes";
import useTelegram from "../../services/hooks/useTelegram";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { user, tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Продолжить',
    })
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
      navigate(signinUrl);
    })

    return () => {
      tg.MainButton.hide();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <h2 className={styles.home__title}>{`Привет, ${user?.first_name}`}</h2>
        <p className={styles.home__text}>Добро пожаловать в сервис управления доступом к самому лучшему в мире VPN-сервису</p>
      </div>
    </div>
  )
}

export default HomePage;