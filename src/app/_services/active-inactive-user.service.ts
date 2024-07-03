import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveInactiveUserService {

  users: any[] = [
    {id:1, name:"User1", status: true},
    {id:2, name:"User2", status: true},
    {id:3, name:"User3", status: false},
    {id:4, name:"User4", status: true},
    {id:5, name:"User5", status: false},
    {id:6, name:"User6", status: true},
  ];

  constructor() { }

  statusChange(user: any){

    const userObj = this.users.find(u => u.id == user.id);
    userObj.status = !user.status;
  }
}
