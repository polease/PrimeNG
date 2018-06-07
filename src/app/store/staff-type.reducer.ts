import  * as StaffTypeAction from './staff-type.actions';
import { StaffType} from './../staff-type.model';
import { AppState, initState, loadState } from './app.store';
 



export function staffTypeReducer(state=initState,action:StaffTypeAction.StaffTypeAction){
    switch(action.type){
        case StaffTypeAction.LOAD_STAFF_TYPES_ACTION:
            return {...initState,
                ...loadState};
        case StaffTypeAction.SAVE_STAFF_TYPE_ACTION:
                return {
                    ...state,
                    staffTypes:[...state.staffTypes,(<StaffTypeAction.SaveStaffTypeAction>action).payload] 
                };

    }
    return state;
}