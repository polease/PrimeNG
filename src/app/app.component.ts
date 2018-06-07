import { MenuItem } from 'primeng/api';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  items: MenuItem[];

  ngOnInit(){
    this.items = [
      {label:"Staff Type", icon:'fa fa-fw fa-bar-chart'},
      {label:"Contact Centers", icon:'fa'},
      {label:"Computers & Phones", icon:'fa'},
    ];
  }
  
}
