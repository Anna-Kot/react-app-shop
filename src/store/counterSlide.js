import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 80,
        countries: []
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setCountriesState: (state, data) => {
            state.countries = data.payload;
        }
    }
})
export const { increment, decrement, setCountriesState } = counterSlice.actions

export default counterSlice.reducer