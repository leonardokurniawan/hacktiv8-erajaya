import { useEffect, useState } from 'react'

const useLatestCurrencyRates = () => {
    const API_KEY="fe12b15442534b7f9142aa221ea39123"
    const domain = 'https://api.currencyfreaks.com'
    const endPoint = `${domain}/latest?apikey=${API_KEY}`
    const [data,setData] = useState();
    const [isLoading,setIsLoading] = useState();
    useEffect(()=>{
        setIsLoading(true)
        fetch(endPoint).then((res)=>res.json()).then((dt)=> {
            setData(dt);
            setIsLoading(false)
        });
    },[endPoint]);

    return { data, isLoading }
}

export default useLatestCurrencyRates