import { createFeatureSelector, createSelector } from "@ngrx/store"
import { LoginState } from "./login.state";

export const liginUser="user"

const getLoginSelecter=createFeatureSelector<LoginState>(liginUser);

export const getUser=createSelector(getLoginSelecter,(state)=>{
    return state.user
})