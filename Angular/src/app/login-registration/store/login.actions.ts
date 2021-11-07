import { createAction, props } from "@ngrx/store";

export const loggedIn=createAction('loggedin');
export const addUser=createAction('addUser',props<{user}>());