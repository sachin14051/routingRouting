import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/model';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObj !: Iuser 
  userId !: string
  constructor(private _route:ActivatedRoute,
    private _userService:UsersService) { }

  ngOnInit(): void {
      
  this.userId= this._route.snapshot.params['userId']
  console.log(this.userId);

  this.userObj =this._userService.getSingleUser(this.userId)!
  console.log(this.userObj)

  }

}
