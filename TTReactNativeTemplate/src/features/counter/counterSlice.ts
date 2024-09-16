import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface counterState {
  value: number;
}


const intialState: counterState = {
  value : 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers:{
    increment:(state ) => {
      state.value += 1;
    },
    decrement:(state) => {
      state.value -= 1;
    },
    incrementByAmount : (state, action : PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
