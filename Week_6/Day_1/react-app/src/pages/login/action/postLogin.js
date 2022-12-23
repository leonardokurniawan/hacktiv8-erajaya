import { createAsyncThunk} from "@reduxjs/toolkit";

const callLoginApi=(email,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email==='admin@login.com' && password==='admin'){
                resolve('Success.')
            }else{
                reject('Invalid email and password')
            }
        },2000)
    })
}

export const postLogin = createAsyncThunk('auth/login',async({email,password})=>{
    try {
        const request = await callLoginApi(email,password)
        const response =  request
        return response
    } catch (error) {
        throw(error)
    }
})
