import { createReducer, on } from "@ngrx/store";
import { addSuccess, deleteSuccess, loadSuccess, updateSuccess } from "./curd.actions";
import { curdInitialState } from "./curd.state";

const _listReducer=createReducer(
    curdInitialState,
    on(loadSuccess,(state,action)=>{
        // console.log(action)
      return{
          ...state,
          list:action.list
      }  
    }),
    on(addSuccess,(state,action)=>{
        // console.log(action)
        let newRow=action.addRow;
      return{
          ...state,
          list:[...state.list,newRow]
      }  
    }),
    on(updateSuccess,(state,action)=>{
        const upDateData=state.list.map((data)=>{
            return action.updatedData._id==data._id ? action.updatedData:data;
        })
      return{
          ...state,
          list:upDateData,
      }  
    }),
    on(deleteSuccess,(state,action)=>{
        // console.log(action.deletedData);
       const filteredData=state.list.filter((row)=>{
           return row._id!==action.deletedData;
       })
    //    console.log(filteredData);
      return{
          ...state,
          list:filteredData,
      }  
    })
)

export function listReducer(state,action){
    return _listReducer(state,action);
}