import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from 'redux-thunk';
import {composeWithDevTools } from '@redux-devtools/extension'
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";


import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store;




