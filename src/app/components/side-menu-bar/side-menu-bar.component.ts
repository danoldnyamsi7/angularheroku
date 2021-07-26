import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.scss']
})
export class SideMenuBarComponent implements OnInit {

  menu_list:string[] = ["home","balance", "deposite", "withdrawal", "statements", "transfer funds"];

  constructor() { }

  ngOnInit(): void {
  }

}
