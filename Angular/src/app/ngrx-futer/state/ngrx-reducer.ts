import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset, setname } from "./ngrx-actions";
import { initialState } from "./ngrx-state";

const  _countReduce=createReducer(
    initialState,
    on(increment,(state)=>{
    return{
        ...state,
        count:state.count+1
    }
}),
on(decrement,(state)=>{
    return{
        ...state,
        count:state.count-1
    }
}),
on(reset,(state)=>{
    return{
        ...state,
        count:0
    }
}),
on(setname,(state,action)=>{
    return{
        ...state,
        name:action.name,
    }
})
)
export function countReducer (state,action){
    return _countReduce(state,action);
}