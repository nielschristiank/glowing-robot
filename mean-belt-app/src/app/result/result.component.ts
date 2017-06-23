import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  currentUser: any = {};
  highbid1: any = [];
  highbid2: any = [];
  highbid3: any = [];

  constructor(private _bidService: BidService, private _router: Router) {
    this._bidService.getCurrUser()
    .then((data)=>{
      console.log("then");
      this.currentUser = data;
      console.log(this.currentUser);
    })
    .catch((error)=>{
      if (error.status == 401){
        this._router.navigate(['/login'])

      }
    })
  }

  ngOnInit() {
    this.getHighBidProd1();
    this.getHighBidProd2();
    this.getHighBidProd3();
  }

  getHighBidProd1(){
    this._bidService.getHighBidProd1()
    .then((data)=>{this.highbid1=data;})
    .catch();
  }
  getHighBidProd2(){
    this._bidService.getHighBidProd2()
    .then((data)=>{this.highbid2=data;})
    .catch();
  }
  getHighBidProd3(){
    this._bidService.getHighBidProd3()
    .then((data)=>{this.highbid3=data;})
    .catch();
  }

  clearBids(){
    this._bidService.clearBids()
    .then(()=>{this._router.navigate(['/'])})
    .catch();
  }

  logout(){
    this._bidService.logout()
    .then(()=>{this._router.navigate(['/login'])})
    .catch();
  }


}
