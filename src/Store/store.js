// import { configureStore } from '@reduxjs/toolkit'
// import dataReducer from './../Slices/DataSlice'
// import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({ 
//     data: dataReducer
// })
  
// const persistedReducer = persistReducer(persistConfig, rootReducer)
  

  
// export const persistor = persistStore(store)
import { configureStore } from "@reduxjs/toolkit";
const initialState={
    data:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "update":
            return{
                ...state,
                data:action.payload.data
            }
        default:
            return state;
    }

}
export default configureStore({ reducer: reducer });