import { SaveStaffTypeAction } from './../store/staff-type.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../store/app.store';
import { StaffType } from './../staff-type.model';
import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core'; 
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-staff-type-edit',
  templateUrl: './staff-type-edit.component.html',
  styleUrls: ['./staff-type-edit.component.css']
})
export class StaffTypeEditComponent implements OnInit {

  @Output() onStaffTypeSaved = new EventEmitter<StaffType>();

  @Input() staffType : StaffType = new StaffType("","","","","",null,"","");

  roleOptions = [
    {label:"MD",value:"MD"},
  {label:"AGENT",value:"AGENT"}
  ];
  enableOptions = [
    {label:"Y",value:"Y"},
  {label:"N",value:"N"}
  ];



  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  onSave()
  {
    this.store.dispatch(new SaveStaffTypeAction(this.staffType));
 
    this.onStaffTypeSaved.emit(this.staffType);
  }

}
