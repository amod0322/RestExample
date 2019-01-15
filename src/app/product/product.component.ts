import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[];
  id : number;
  constructor(private http:Http, private httpClient:HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.http.get("http://localhost:5555/products").pipe(map(response=>response.json()))
    .subscribe((response:any)=>{
      this.products= response;
      console.log(response);
    })
  }


  private headers= new Headers({'Content-Type':'application/json'});

  deleteProduct1(id){
    if(confirm("are you sure want to delete product with  id = "+id)){
      const url = `"http://localhost:5555/products"/${id}`
      return this.http.delete(url,{headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
      })
    }
  }

  deleteProduct(id){
    if(confirm("are you sure want to delete product with  id = "+id)){
      const url = `http://localhost:5555/products/${id}`
      console.log("url",url);
      this.httpClient.delete(url).subscribe((response)=>{
        this.fetchData();
      });
    }
  }

}
