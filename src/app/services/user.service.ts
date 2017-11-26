import {Injectable} from '@angular/core';

@Injectable()

export class UserService{
  user:string[];
  constructor(){
    this.user = ["Kapil","Rishabh","Anuj"];
  }

  getUsers(){
    return this.user;
  }
}
