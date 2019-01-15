import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  items=["Angular","React", "Underscore"];
  newItem="";

  pushItem=function(){
    if(this.newItem!=""){
      this.items.push(this.newItem);
      this.newItem="";
    }
  }

    removeItem=function(index){
    this.items.splice(index,1);
  }


  }




