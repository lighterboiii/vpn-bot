import { FC, useEffect } from "react";
import styles from './Home.module.scss';
import { useNavigate } from "react-router-dom";
import { signinUrl } from "../../utils/routes";
import useTelegram from "../../services/hooks/useTelegram";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { user, tg } = useTelegram();

  const handleMainButtonClicked = () => {
    navigate(signinUrl);
  };

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Продолжить',
    })
    tg.MainButton.show();
    tg.onEvent('mainButtonClicked', handleMainButtonClicked)

    return () => {
      tg.MainButton.hide();
      tg.offEvent('mainButtonClicked', handleMainButtonClicked)
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