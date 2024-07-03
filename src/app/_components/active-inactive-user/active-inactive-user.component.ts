import { Component, OnInit } from '@angular/core';
import { ActiveInactiveUserService } from 'src/app/_services/active-inactive-user.service';


@Component({
  selector: 'app-active-inactive-user',
  templateUrl: './active-inactive-user.component.html',
  styleUrls: ['./active-inactive-user.component.scss']
})
export class ActiveInactiveUserComponent implements OnInit {

  users: any[] = [];

  constructor(public userService: ActiveInactiveUserService){

  }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  changeStatus(user: any){
    this.userService.statusChange(user);
  }
}
