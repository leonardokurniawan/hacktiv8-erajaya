import { createSlice} from '@reduxjs/toolkit'
import { postLogin } from '../action/postLogin'

const initialState = {
    isLoading:false,
    isSuccess:false,
    errorMessage:'',
}


const LoginSlice = createSlice({
    name:'Login',
    initialState,
    reducers:{},//immutable, ga bisa olah data semau2ny
    extraReducers: (builder)=>{
        //bebas
        builder.addCase(postLogin.pending,(state)=>{
            state.isLoading = true
        }).addCase(postLogin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.errorMessage = action.payload
        }).addCase(postLogin.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.errorMessage = action.error.message
        })
    }
}).reducer

export default LoginSlice