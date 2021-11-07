import { createReducer, on } from "@ngrx/store"
import { addUser } from "./login.actions"
import { loginInitialStae } from "./login.state"

export const _loginReducer=createReducer(
    loginInitialStae,
    on(addUser,(state,action)=>{
        // console.log(action)
        return{
            ...state,
            user:action.user,
        }
    })
)
    


export function loginreducer(state,action){
    return _loginReducer(state,action)
}