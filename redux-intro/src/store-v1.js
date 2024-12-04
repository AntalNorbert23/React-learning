import { combineReducers, createStore } from "redux";

const initialStateAccounr={
    balance:0,
    loan:0,
    loanPurpose:'',
}

const initialStateCustomer={
    fullName:'',
    nationalID:'',
    createdAt:'',
}

function accountReducer(state = initialStateAccounr,action) {
    switch(action.type){
        case 'account/deposit':
            return {...state, balance: state.balance + action.payload}
        case 'account/withdraw':
            return {...state, balance: state.balance - action.payload}
        case 'account/requestLoan':
            if (state.loan > 0) return state;
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose}
        case 'account/payLoan':
            return {
                ...state,
                loan: 0,
                loanPurpose:'',
                balance: state.balance - state.loan
            }
        default:
            return state;
    }
}

function customerReducer(state=initialStateCustomer,dispatch){
    switch(action.type){
        case 'customer/createCustomer':
            return{
                ...state, 
                fullName:action.payload.fullName,
                nationalID:action.payload.nationalID,
                createdAt:action.payload.createdAt
            }
        case 'customer/updateName':
            return{
                ...state,
                fullName:action.payload,
            }    
    }
}

const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
})

const store=createStore(rootReducer);

store.dispatch({type:'account/deposit', payload: 500})
console.log(store.getState())

store.dispatch({type:'account/requestLoan', payload: {amount :1000, purpose: "Buy a car"}})
console.log(store.getState())


function deposit(amount){
    return {type:'account/deposit', payload: amount}
}

function withdraw(amount){
    return {type:'account/withdraw', payload: amount}
}

function requestLoan(amount,purpose){
    return{
        type:'account/requestLoan',
        payload: {amount, purpose}
    }
}

function payLoan(){}


store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());


function createCustomer(fullName,nationalID){
    return {type:'customer/createCustomer', payload:{fullName,nationalID,createdAt:new Date().toISOString()}}
}

function updateName(fullName){
    return {type: 'account/updateName', payload:fullName}
}

store.dispatch(createCustomer('Antal Norbert',' '))