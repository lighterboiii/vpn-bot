/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useState, useEffect } from "react";
import styles from './Subscription.module.scss';
import { useNavigate } from "react-router-dom";
import useTelegram from "../../services/hooks/useTelegram";
import Button from "../../components/Button/Button";
import { profileUrl } from "../../utils/routes";
import Card from "../../components/Card/Card";

const items = [
  { id: 1, name: 'Базовый план', price: '4999/год' },
  { id: 2, name: 'Премиум план', price: '9999/год' }
]

const SubscriptionPage: FC = () => {
  const { tg, onAppClose, queryId } = useTelegram();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSendData = useCallback(() => {
    const data = {
      selectedPlan: selectedPlan,
      queryId
    };
    fetch('http://91.236.199.185:8000/vpn-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    onAppClose();
  }, [selectedPlan]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', handleSendData)
    return () => {
      tg.offEvent('mainButtonClicked', handleSendData)
    }
  }, [handleSendData]);

  const handleButtonClick = (plan: string) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    if (selectedPlan) {
      tg.MainButton.setParams({
        text: 'К оплате',
      });
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }

    return () => {
      tg.MainButton.hide();
    };
  }, [selectedPlan, tg.MainButton]);

  return (
    <div className={styles.subscription}>
      <h3 className={styles.subscription__title}>Выберите план подписки:</h3>
      <div className={styles.subscription__grid}>
        {items.map(item => (
          <Card
            key={item.id}
            item={item}
            handleClick={handleButtonClick}
          />
        ))}
      </div>
      <Button text="Назад" handleClick={() => navigate(profileUrl)} />
    </div>
  )
};

export default SubscriptionPage;