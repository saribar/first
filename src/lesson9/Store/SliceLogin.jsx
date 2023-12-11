import { createSlice } from '@reduxjs/toolkit'

const loginVal = {
  
    name:"",
    password:0

}

const loginSlice = createSlice({
    name: "login",
    initialState: loginVal,
    reducers: {
     
    }
})

export default loginSlice.reducer