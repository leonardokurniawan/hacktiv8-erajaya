import {createSlice} from '@reduxjs/toolkit'
import {fetchAllUsers} from '../action/fetchAllUser'

const initialState = {
    isLoading:false,
    isSuccess:false,
    data:[]
}

const HomeSlice = createSlice({
    name:'Home',
    initialState,
    reducers:{},//immutable, ga bisa olah data semau2ny
    extraReducers: (builder)=>{
        //bebas
        builder.addCase(fetchAllUsers.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(
            fetchAllUsers.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            }
        ).addCase(
            fetchAllUsers.rejected,(state,action)=>{
                state.isLoading = false
                state.isSuccess = false
            }
        )
    }
}).reducer
export default HomeSlice