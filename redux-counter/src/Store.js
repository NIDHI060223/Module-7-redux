import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Reducer';

const store =configureStore({
    reducer: {
        counter: counterSlice
    }
})
export default store;