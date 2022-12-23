import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from './action/postLogin';

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector(state=>state.Login)
  

  if(login?.isLoading) return ( <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center'}}><h1 style={{textAlign:'center'}}>Loading...</h1></div>)

  return (
    <div style={{display:'flex',height:'100vh', alignItems:'center'}}>
        <form onSubmit={(e)=> {
          let values = {email:e.target.email.value,password:e.target.password.value}
          dispatch(postLogin(values))
          }} style={{margin:'0 auto'}}>
          <div style={{display:'flex',justifyContent:'between'}}>
            <label htmlFor='email'>Email:</label>
            <input type="email" id='email' name='email'/>
            </div>
            <br/>
            <div>
            <label htmlFor='password'>Password:</label>
            <input type="password" id='password' name='password'/>
            </div>
            <br/>
            <button type='submit'>Login</button>
            <br/>
            <span>{login?.errorMessage}</span>
        </form>
    </div>
  )
}

export default Login