import { StaffType } from './../staff-type.model';
import { Action } from "@ngrx/store";


export const LOAD_STAFF_TYPES_ACTION = "LOAD_STAFF_TYPES_ACTION"
export const SAVE_STAFF_TYPE_ACTION = "SAVE_STAFF_TYPE_ACTION"

export class LoadStaffTypeAction implements Action
{
    readonly type = LOAD_STAFF_TYPES_ACTION;
}

export class SaveStaffTypeAction implements Action{
    readonly type = SAVE_STAFF_TYPE_ACTION;

    constructor(public payload:StaffType){}
}

export type StaffTypeAction = LoadStaffTypeAction|SaveStaffTypeAction;