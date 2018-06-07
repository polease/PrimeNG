import { staffTypeReducer } from 'src/app/store/staff-type.reducer';
import { LoadStaffTypeAction } from './../store/staff-type.actions';
import { AppState, initState, loadState } from './../store/app.store';
import { StaffType } from './../staff-type.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff-type-table',
  templateUrl: './staff-type-table.component.html',
  styleUrls: ['./staff-type-table.component.css']
})
export class StaffTypeTableComponent implements OnInit {

  visible = false;
  staffTypes:StaffType[]; 
  //staffTypes:Observable<StaffType[]>;
  selectedStaffType :StaffType;


  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    //this.staffTypes =this.store.select<StaffType[]>("staffTypes");
    this.staffTypes = loadState.staffTypes;
    this.store.select<StaffType[]>("staffTypes").subscribe(
      (obj)=>{console.dir(obj)}
    );
  }

  onLoad(){
    this.store.dispatch(new LoadStaffTypeAction());
  }

  onAdd()
  {
     

  }

  onRowSelect(event){
    //event
    this.visible = true;
  }

  onStaffTypeSaved(){

    //dispatch event here

    this.visible = false;
  }
}
