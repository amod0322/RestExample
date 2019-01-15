import { User } from './../model/user.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
form;
firstName:string;
 user:User= new User();


  constructor() { }

  ngOnInit() {
    this.form= new FormGroup({
       firstName : new  FormControl(""),
       lastName : new FormControl(""),
       languages :  new FormControl("")}
    );
  }



  onSubmit(){
console.log(this.form);
this.user.name=this.form.value.firstName;
this.user.value=this.form.value.lastName;
this.user.languages=this.form.value.languages;
  }

  display(){
console.log(this.user);
  };


  memberVariable = "This is the member variable";

  obj={
    id:1,
    firstName:"Amod",
    lastName:"Murkute"
  }

  

}
