import {createStore} from 'redux';

const initialState = {
   balance: 0,
   username: '',
   mobile:null
};
const reducer = (state = initialState, action) => {
   switch (action.type) {
       case 'DEPOSIT': return {...state, balance: state.balance + action.payload};
       case 'WITHDRAW': return {...state, balance: state.balance - action.payload};
       case 'SET_USERNAME': return {...state, username: action.payload};    
         case 'SET_MOBILE': return {...state, mobile: action.payload};
         default: return state;
    }
};

export const store = createStore(reducer);
