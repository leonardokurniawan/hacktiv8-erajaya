import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk('FETCH_ALL_USERS',async()=>{
    const request = await fetch("https://jsonplaceholder.typicode.com/users",{method:'GET'});
    const response = await request.json();
    console.log(response)
    return response;
});

