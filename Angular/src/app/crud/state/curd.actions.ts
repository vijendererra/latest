import { createAction, props } from "@ngrx/store";


export const loadData=createAction('lodidata');
export const loadSuccess=createAction('sucessdata',props<{list}>());
export const addData=createAction('addData',props<{savedata}>());
export const addSuccess=createAction('addSuccess',props<{addRow}>());
export const upDateData=createAction('upDateData',props<{update}>());
export const updateSuccess=createAction('updateSuccess',props<{updatedData}>());
export const deleteOne=createAction('deleteOne',props<{ delete_id}>());
export const deleteSuccess=createAction('deleteSuccess',props<{deletedData}>());
