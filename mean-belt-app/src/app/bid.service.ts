import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BidService {

  constructor(private _http: Http) { }

  getCurrUser(){
    return this._http.get('/api/getCurrUser').map(response=>response.json()).toPromise();
  }

  login(user){
    return this._http.post('/api/login', user).map(response=>response.json()).toPromise();
  }

  placeBid(bid){
    return this._http.post('/api/placeBid', bid).map(response=>response.json()).toPromise();
  }

  getBids(){
    return this._http.get('/api/getBids').map(response=>response.json()).toPromise();
  }

  getHighBidProd1(){
    return this._http.get('/api/getHighBidProd1').map(response=>response.json()).toPromise();
  }
  getHighBidProd2(){
    return this._http.get('/api/getHighBidProd2').map(response=>response.json()).toPromise();
  }
  getHighBidProd3(){
    return this._http.get('/api/getHighBidProd3').map(response=>response.json()).toPromise();
  }
  clearBids(){
    return this._http.get('/api/clearBids').map(response=>response.json()).toPromise();
  }

  logout(){
    return this._http.get('/api/logout').map(response=>response.json()).toPromise();
  }

  // search(data){
  //   return this._http.post('/api/search', data).map(response=>response.json()).toPromise();
  // }

}
