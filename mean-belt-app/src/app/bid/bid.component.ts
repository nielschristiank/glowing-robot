import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  currentUser: any = {};
  bid1: any = {_user: "", _product: "product1", amount: null};
  bid2: any = {_user: "", _product: "product2", amount: null};
  bid3: any = {_user: "", _product: "product3", amount: null};
  bids: any[] = [];
  errors: any[] = [];
  // searchData: any = {};
  // searchResults: any[] = [];

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
    this.getBids();
  }

  getBids(){
    this._bidService.getBids()
    .then((data)=>{this.bids = data;})
    .catch();
  }

  placeBid1(){
    this.bid1._user=this.currentUser._id;
    console.log(this.bid1);
    this._bidService.placeBid(this.bid1)
    .then((data)=>{this.getBids(); this.errors = [];})
    .catch((err)=>{this.errors = err._body.split(',');});
  }
  placeBid2(){
    this.bid2._user=this.currentUser._id;
    console.log(this.bid2);
    this._bidService.placeBid(this.bid2)
    .then((data)=>{this.getBids();this.errors = [];})
    .catch((err)=>{this.errors = err._body.split(',');});
  }
  placeBid3(){
    this.bid3._user=this.currentUser._id;
    console.log(this.bid3);
    this._bidService.placeBid(this.bid3)
    .then((data)=>{this.getBids();this.errors = [];})
    .catch((err)=>{this.errors = err._body.split(',');});
  }

  endBids(){
    var prod1 = false;
    var prod2 = false;
    var prod3 = false;

    for (var i = 0; i < this.bids.length; i++){
      if(this.bids[i]._product == 'product1'){
        prod1 = true;
      }
      if(this.bids[i]._product == 'product2'){
        prod2 = true;
      }
      if(this.bids[i]._product =='product3'){
        prod3 = true;
      }
    }
    console.log(prod1, prod2, prod3);
    if(prod1 == false || prod2 == false || prod3 == false){
      alert('All products must have bids');
    }
    else{
        this._router.navigate(['/result']);
    }
  }

  // search(){
  //   this._bidService.search(this.searchData)
  //   .then((data)=>{this.searchResults = data})
  //   .catch();
  // }

  logout(){
    this._bidService.logout()
    .then(()=>{this._router.navigate(['/login'])})
    .catch();
  }

  }
