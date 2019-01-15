import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Http,Response, Headers} from '@angular/http'
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
form;
  constructor(private http:Http) {   }
  productObj:object={};
  confirmationString:string="Product is Added";
  isAdded:boolean=false;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
      color:  new FormControl("")
    });
  }


  addProduct(){
    this.productObj={
      "name":this.form.value.name,
      "color":this.form.value.color
    }

    this.http.post("http://localhost:5555/products/", this.productObj)
    .pipe(map(response=>response.json()))
    .subscribe(response=>{
      console.log(response);
      this.isAdded=true;
    })

  }

}
