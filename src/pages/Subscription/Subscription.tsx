import { FC, useCallback, useState, useEffect } from "react";
import styles from './Subscription.module.scss';
import { useNavigate } from "react-router-dom";
import useTelegram from "../../services/hooks/useTelegram";
import Button from "../../components/Button/Button";
import { profileUrl } from "../../utils/routes";

const SubscriptionPage: FC = () => {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSendData = useCallback(() => {
    const data = selectedPlan;
    tg.sendData(JSON.stringify(data));
  }, [selectedPlan]);

    useEffect(() => {
      tg.onEvent('mainButtonClicked', handleSendData)
      return () => {
          tg.offEvent('mainButtonClicked', handleSendData)
      }
  }, [handleSendData]);

  const handleButtonClick = (plan: string) => {
    setSelectedPlan(plan)
    if (selectedPlan) {
      tg.MainButton.setParams({
        text: 'К оплате',
      })
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  };

  console.log(selectedPlan);
  return (
    <div className={styles.subscription}>
      <h3 className={styles.subscription__title}>Выберите план подписки:</h3>
      <div className={styles.subscription__grid}>
        <button
          type="button"
          className={styles.subscription__planButton}
          onClick={() => handleButtonClick('Базовый план')}
        >
          <img src="" alt="basic_plan_img" />
          <p>Базовый план 4999р/год</p>
        </button>
        <button
          type="button"
          className={styles.subscription__planButton}
          onClick={() => handleButtonClick('Премиум план')}
        >
          <img src="" alt="premium_plan_img" />
          <p>Премиум план 9999р/год</p>
        </button>
      </div>
      <Button text="Назад" handleClick={() => navigate(profileUrl)} />
    </div>
  )
};

export default SubscriptionPage;