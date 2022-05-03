import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import dataBase from './dataShop';


export default configureStore({
    reducer: {
        dataName: dataBase,
    }
})