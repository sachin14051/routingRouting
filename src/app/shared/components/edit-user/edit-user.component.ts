import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Iuser } from '../../model/model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId!: string
  userObj!:Iuser
  constructor(private _route :ActivatedRoute,
    private _userService: UsersService,
    ) { }

  ngOnInit(): void {

  this.userId = this._route.snapshot.params['userId'];
  this.userObj = this._userService.getSingleUser(this.userId)!
  }

  onUpdateHandler(fname:string){
    let obj :Iuser = {
      fname : fname,
      uid:this.userId
    }
    // console.log(obj)
    this._userService.updateUser(obj)
  }
  
}
