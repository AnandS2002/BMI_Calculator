import {createSlice} from '@reduxjs/toolkit'
// import type {PayloadAction} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const bmiSlice= createSlice({
  name:'bmi',
  initialState,
  reducers:{
    update:(state,action)=>{state.value=action.payload}
    
  }
})
export const {update} =bmiSlice.actions
export default bmiSlice.reducer