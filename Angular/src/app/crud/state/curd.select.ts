import { createFeatureSelector, createSelector,  } from "@ngrx/store";
import { CurdState } from "./curd.state";


export const _loadDataSuccess='list';

const getListDataSelecter=createFeatureSelector<CurdState>(_loadDataSuccess);

export const getList=createSelector(getListDataSelecter,(state)=>{
    return state.list;
})