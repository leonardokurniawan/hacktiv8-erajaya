import React from 'react';
import { getDailyStock, getWeeklyStock } from '../../service/api';

const Stock = () => {
  const dailyStock = getDailyStock();
  const weeklyStock = getWeeklyStock();
  return (
    <div>
      <span className="uppercase">Erajaya Stock Price</span>
      <h4>Rp 392</h4>
    </div>
  );
};

export default Stock;
