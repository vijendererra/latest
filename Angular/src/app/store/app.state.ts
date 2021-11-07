import { listReducer } from "../crud/state/curd.reducer";
import { CurdState } from "../crud/state/curd.state";
import { loginreducer } from "../login-registration/store/login.reducer";
import { LoginState } from "../login-registration/store/login.state";
import { countReducer } from "../ngrx-futer/state/ngrx-reducer";
import { CounterState } from "../ngrx-futer/state/ngrx-state";

export interface AppState {
    count: CounterState;
    // list:CurdState;
    user:LoginState
}

export const appReducer = {
    count: countReducer,
    // list:listReducer,
    user:loginreducer
}