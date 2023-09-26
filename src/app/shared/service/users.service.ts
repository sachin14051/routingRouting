import { Injectable } from '@angular/core';
import { Iuser } from '../model/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _router: Router) { }
  usersArray: Array<Iuser> = [
    {
      fname: "jhon ",
      uid: "jbwdjbdbd"
    },
    {
      fname: "jhon ",
      uid: "jbwdjghghbdbd"
    },
    {
      fname: "apr ",
      uid: "jbwdjbtggtrgdbd"
    },
    {
      fname: "dow ",
      uid: "jbwdjbgtgdbd"
    },
    {
      fname: "may ",
      uid: "jbwgtgdjbdbd"
    }
  ]

  getAllusers() {
    return this.usersArray
  }

  getSingleUser(id: string) {
    return this.usersArray.find(ele => {
      return ele.uid === id
    })
  }



  updateUser(userObj: Iuser) {
    return this.usersArray.forEach((ele) => {
      if (ele.uid === userObj.uid) {
        ele.fname = userObj.fname
        this._router.navigate(['/users'])

      }

    })
  }
}
