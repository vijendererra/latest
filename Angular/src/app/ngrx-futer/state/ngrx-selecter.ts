import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { CounterState } from "./ngrx-state";

export const Count_Variable='count';

const getCounterState=createFeatureSelector<CounterState>(Count_Variable);

export const getCount=createSelector(getCounterState,(state)=>{
    return state.count;
})
export const getName=createSelector(getCounterState, (state)=>{
return state.name;
})
