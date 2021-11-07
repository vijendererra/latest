import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { CrudService } from "src/app/services/crud.service";
import { addData, addSuccess, deleteOne, deleteSuccess, loadData, loadSuccess, upDateData, updateSuccess } from "./curd.actions";

@Injectable()
export class CurdDataService {
    constructor(
        private actions$: Actions,
        private curdSrc: CrudService
    ) { }


    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadData), mergeMap((action) => {
                return this.curdSrc.getEmp().pipe(map((list) => {
                    // console.log(list);
                    return loadSuccess({ list })
                }))
            })
        )
    });

    addData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addData), mergeMap((action) => {
                return this.curdSrc.postEmp(action.savedata).pipe(map((data) => {
                    const addRow = data;
                    // const addRow={...action.savedata,_id:data._id}
                    return addSuccess({ addRow })
                }))
            })
        )
    });

    //  addData$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(addData), mergeMap((action) => {
    //             return this.curdSrc.postEmp(action.savedata).pipe(map((data) => {
    //                 const addData={action,data.name}
    //             }))
    //         })
    //     )
    // }

    upDate$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(upDateData), switchMap((action) => {
                return this.curdSrc.putEmp(action.update).pipe(map((res) => {
                    // const updatedData=res;
                    return updateSuccess({ updatedData: res })

                }))
            }))

        // }, { dispatch: false });
    });

    deleteOne$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteOne), mergeMap((action) => {
                // console.log(action);
                return this.curdSrc.deleteEmp(action.delete_id).pipe(map((res) => {
                    return deleteSuccess({ deletedData: action.delete_id })
                }))
            })
        )
        // }, { dispatch: false })
    });
}