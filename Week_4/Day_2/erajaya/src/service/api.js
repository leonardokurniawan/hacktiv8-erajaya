export const getDailyStock = () => {
  const url = 'https://www.erajaya.com/eraa-stock-daily';
  let result;
  fetch(url).then((res) => {
    console.log(res);
    result = res;
  });
  return result;
};

export const getWeeklyStock = () => {
  const url = 'https://www.erajaya.com/eraa-stock-52wk';
  let result;
  fetch(url).then((res) => {
    console.log(res);
    result = res;
  });
  return result;
};
