import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllUsers } from './action/fetchAllUser';
const Home = () => {
    const dispatch = useDispatch();
    const {data,isLoading} = useSelector(state=>state.Home)

    useEffect(() => {
        dispatch(fetchAllUsers())
      return () => {
      }
    }, [dispatch])
    
    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div>{data.map((val,index)=>{
            return (
                <div key={index}>
                    <p>{val.name}</p>
                    <p>{val.email}</p>
                    <p>{val.phone}</p>
                </div>
            )
        })}</div>
    )
}

export default Home