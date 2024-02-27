/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useState, useEffect } from "react";
import styles from './Subscription.module.scss';
import { useNavigate } from "react-router-dom";
import useTelegram from "../../services/hooks/useTelegram";
import Button from "../../components/Button/Button";
import { profileUrl } from "../../utils/routes";
import Card from "../../components/Card/Card";
import { items } from "../../utils/mockSubscriptionData";
import { TSubscription } from "../../types/types";

const SubscriptionPage: FC = () => {
  const { tg, onAppClose, queryId } = useTelegram();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<TSubscription | null>(null);
  console.log(selectedPlan);
  const handleSendData = useCallback(() => {
    const data = {
      selectedPlan,
      queryId
    };
    fetch('http://91.236.199.185:8000/web-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }, [selectedPlan, queryId]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', handleSendData)
    return () => {
      tg.offEvent('mainButtonClicked', handleSendData)
    }
  }, [handleSendData]);

  const handleChoosePlan = (plan: TSubscription) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    if (selectedPlan) {
      tg.MainButton.setParams({
        text: `К оплате ${selectedPlan.price}`,
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
            handleClick={handleChoosePlan}
          />
        ))}
      </div>
      <Button text="Назад" handleClick={() => navigate(profileUrl)} />
    </div>
  )
};

export default SubscriptionPage;