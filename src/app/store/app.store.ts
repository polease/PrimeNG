 
import { StaffType } from './../staff-type.model';

export interface AppState{
    staffTypes:StaffType[];
}

export const initState ={
    staffTypes:[]
}

export const loadState = {
    staffTypes:[
        new StaffType("customer service","CS","AGENT","Y","SU",new Date(Date.now()),"Y","N"),
        new StaffType("IT","IT","AGENT","Y","SU",new Date(Date.now()),"Y","N"),
        new StaffType("Finance","FS","AGENT","Y","SU",new Date(Date.now()),"Y","N")
    ]
};
