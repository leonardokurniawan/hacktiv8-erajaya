import useLatestCurrencyRates from './hooks/useLatestCurrencyRates';
import './App.css';

function App() {
  const { data, isLoading } = useLatestCurrencyRates()
  const currencies = ['CAD','IDR','JPY','CHF','EUR','GBP'];
  if(isLoading) return (
    <div className='container'>
      <span>Loading ...</span>
    </div>
  )
  return (
    <div className="container">
        <table>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
          {currencies?.map((currency)=>{
            const percentage = 5;
            const rate = parseFloat(data?.rates[currency]);
            const percentageRate = (rate * percentage) / 100
            const buy = rate + percentageRate;
            const sell = rate - percentageRate;
            return (
              <tr>
                <td>{currency}</td>
                <td>{buy}</td>
                <td>{rate}</td>
                <td>{sell}</td>
              </tr>
            )
          })}
        </table>
        <br/>
        <span>Rates are based from 1 USD</span>
        <span>This application uses API from <a className='text-decoration-none'  href="https://currencyfreaks.com" target="_blank" rel="noopener noreferrer">https://currencyfreaks.com</a></span>
    </div>
  );
}

export default App;
