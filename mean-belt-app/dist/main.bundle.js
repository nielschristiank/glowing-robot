webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bid_bid_component__ = __webpack_require__("../../../../../src/app/bid/bid.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__bid_bid_component__["a" /* BidComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'result',
        component: __WEBPACK_IMPORTED_MODULE_3__result_result_component__["a" /* ResultComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bid_bid_component__ = __webpack_require__("../../../../../src/app/bid/bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__result_result_component__["a" /* ResultComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bid_bid_component__["a" /* BidComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__bid_service__["a" /* BidService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidService = (function () {
    function BidService(_http) {
        this._http = _http;
    }
    BidService.prototype.getCurrUser = function () {
        return this._http.get('/api/getCurrUser').map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.login = function (user) {
        return this._http.post('/api/login', user).map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.placeBid = function (bid) {
        return this._http.post('/api/placeBid', bid).map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.getBids = function () {
        return this._http.get('/api/getBids').map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.getHighBidProd1 = function () {
        return this._http.get('/api/getHighBidProd1').map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.getHighBidProd2 = function () {
        return this._http.get('/api/getHighBidProd2').map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.getHighBidProd3 = function () {
        return this._http.get('/api/getHighBidProd3').map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.clearBids = function () {
        return this._http.get('/api/clearBids').map(function (response) { return response.json(); }).toPromise();
    };
    BidService.prototype.logout = function () {
        return this._http.get('/api/logout').map(function (response) { return response.json(); }).toPromise();
    };
    return BidService;
}());
BidService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BidService);

var _a;
//# sourceMappingURL=bid.service.js.map

/***/ }),

/***/ "../../../../../src/app/bid/bid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product{\n  display: inline-block;\n  vertical-align: top;\n}\n\n.product_img {\n  width: 150px;\n  height: 150px;\n  border: 1px solid black;\n}\n\nsmall{\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bid/bid.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome, {{currentUser.name}}! Bid Now!</h1>\n<button (click)=\"logout()\">Logout</button>\n\n<small *ngFor=\"let error of errors\">{{error}}</small>\n\n<div>\n  <div class=\"product\">\n    <div class=\"product_img\">\n    </div>\n    <p>Product 1</p>\n    <form (submit)=\"placeBid1()\">\n      <input type=\"number\" name=\"amount\" [(ngModel)]=\"bid1.amount\" #amount=\"ngModel\">\n      <!-- <input type=\"hidden\" name=\"_user\" value=\"value\" [(ngModel)]=\"bid1._user\" #_user=\"ngModel\"> -->\n      <input type=\"submit\" value=\"Bid\">\n    </form>\n\n    <div class=\"bids\">\n      <p>Current Bids</p>\n      <div *ngFor=\"let bid of bids\"><p *ngIf=\"bid._product == 'product1' \">{{bid._user.name}} place bid for ${{bid.amount}}</p></div>\n    </div>\n\n    <!-- <form (submit)=\"search()\">\n      <input type=\"text\" name=\"data\" [(ngModel)]=\"searchData.data\" #data=\"ngModel\">\n      <input type=\"submit\" value=\"search\">\n    </form> -->\n\n  </div>\n  <div class=\"product\">\n    <div class=\"product_img\">\n    </div>\n    <p>Product 2</p>\n    <form (submit)=\"placeBid2()\">\n      <input type=\"number\" name=\"amount\" [(ngModel)]=\"bid2.amount\" #amount=\"ngModel\">\n      <input type=\"hidden\" name=\"_user\" [value]=\"currentUser._id\" [(ngModel)]=\"bid2._user\" #_user=\"ngModel\">\n      <input type=\"submit\" value=\"Bid\">\n    </form>\n\n    <div class=\"bids\">\n      <p>Current Bids</p>\n      <div *ngFor=\"let bid of bids\"><p *ngIf=\"bid._product == 'product2' \">{{bid._user.name}} place bid for ${{bid.amount}}</p></div>\n    </div>\n\n  </div>\n  <div class=\"product\">\n    <div class=\"product_img\">\n    </div>\n    <p>Product 3</p>\n    <form (submit)=\"placeBid3()\">\n      <input type=\"number\" name=\"amount\" [(ngModel)]=\"bid3.amount\" #amount=\"ngModel\">\n      <input type=\"hidden\" name=\"_user\" [value]=\"currentUser._id\" [(ngModel)]=\"bid3._user\" #_user=\"ngModel\">\n      <input type=\"submit\" value=\"Bid\">\n    </form>\n\n    <div class=\"bids\">\n      <p>Current Bids</p>\n      <div *ngFor=\"let bid of bids\"><p *ngIf=\"bid._product == 'product3' \">{{bid._user.name}} place bid for ${{bid.amount}}</p></div>\n    </div>\n\n  </div>\n</div>\n\n<button (click)=\"endBids()\">End Bids</button>\n"

/***/ }),

/***/ "../../../../../src/app/bid/bid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidComponent = (function () {
    // searchData: any = {};
    // searchResults: any[] = [];
    function BidComponent(_bidService, _router) {
        var _this = this;
        this._bidService = _bidService;
        this._router = _router;
        this.currentUser = {};
        this.bid1 = { _user: "", _product: "product1", amount: null };
        this.bid2 = { _user: "", _product: "product2", amount: null };
        this.bid3 = { _user: "", _product: "product3", amount: null };
        this.bids = [];
        this.errors = [];
        this._bidService.getCurrUser()
            .then(function (data) {
            console.log("then");
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            if (error.status == 401) {
                _this._router.navigate(['/login']);
            }
        });
    }
    BidComponent.prototype.ngOnInit = function () {
        this.getBids();
    };
    BidComponent.prototype.getBids = function () {
        var _this = this;
        this._bidService.getBids()
            .then(function (data) { _this.bids = data; })
            .catch();
    };
    BidComponent.prototype.placeBid1 = function () {
        var _this = this;
        this.bid1._user = this.currentUser._id;
        console.log(this.bid1);
        this._bidService.placeBid(this.bid1)
            .then(function (data) { _this.getBids(); _this.errors = []; })
            .catch(function (err) { _this.errors = err._body.split(','); });
    };
    BidComponent.prototype.placeBid2 = function () {
        var _this = this;
        this.bid2._user = this.currentUser._id;
        console.log(this.bid2);
        this._bidService.placeBid(this.bid2)
            .then(function (data) { _this.getBids(); _this.errors = []; })
            .catch(function (err) { _this.errors = err._body.split(','); });
    };
    BidComponent.prototype.placeBid3 = function () {
        var _this = this;
        this.bid3._user = this.currentUser._id;
        console.log(this.bid3);
        this._bidService.placeBid(this.bid3)
            .then(function (data) { _this.getBids(); _this.errors = []; })
            .catch(function (err) { _this.errors = err._body.split(','); });
    };
    BidComponent.prototype.endBids = function () {
        var prod1 = false;
        var prod2 = false;
        var prod3 = false;
        for (var i = 0; i < this.bids.length; i++) {
            if (this.bids[i]._product == 'product1') {
                prod1 = true;
            }
            if (this.bids[i]._product == 'product2') {
                prod2 = true;
            }
            if (this.bids[i]._product == 'product3') {
                prod3 = true;
            }
        }
        console.log(prod1, prod2, prod3);
        if (prod1 == false || prod2 == false || prod3 == false) {
            alert('All products must have bids');
        }
        else {
            this._router.navigate(['/result']);
        }
    };
    // search(){
    //   this._bidService.search(this.searchData)
    //   .then((data)=>{this.searchResults = data})
    //   .catch();
    // }
    BidComponent.prototype.logout = function () {
        var _this = this;
        this._bidService.logout()
            .then(function () { _this._router.navigate(['/login']); })
            .catch();
    };
    return BidComponent;
}());
BidComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bid',
        template: __webpack_require__("../../../../../src/app/bid/bid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bid/bid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BidComponent);

var _a, _b;
//# sourceMappingURL=bid.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Login</legend>\n  <form (submit)=\"login()\">\n    <p><label>Username: </label><input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\"></p>\n    <input type=\"submit\" value=\"Login\">\n  </form>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_bidService, _router) {
        this._bidService = _bidService;
        this._router = _router;
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._bidService.login(this.user)
            .then(function (data) {
            console.log(data);
            _this._router.navigate(['']);
        })
            .catch();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> {{currentUser.name}} ended the Bid </h1>\n<button (click)=\"logout()\">Logout</button>\n\n<h3>Highest Bidder per product</h3>\n\n<p>Product 1</p>\n<p>{{highbid1[0]._user.name}} bid {{highbid1[0].amount}}</p>\n\n<p>Product 2</p>\n<p>{{highbid2[0]._user.name}} bid {{highbid2[0].amount}}</p>\n\n<p>Product 3</p>\n<p>{{highbid3[0]._user.name}} bid {{highbid3[0].amount}}</p>\n\n<button (click)=\"clearBids()\">Star Bids</button>\n"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bid_service__ = __webpack_require__("../../../../../src/app/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = (function () {
    function ResultComponent(_bidService, _router) {
        var _this = this;
        this._bidService = _bidService;
        this._router = _router;
        this.currentUser = {};
        this.highbid1 = [];
        this.highbid2 = [];
        this.highbid3 = [];
        this._bidService.getCurrUser()
            .then(function (data) {
            console.log("then");
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            if (error.status == 401) {
                _this._router.navigate(['/login']);
            }
        });
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.getHighBidProd1();
        this.getHighBidProd2();
        this.getHighBidProd3();
    };
    ResultComponent.prototype.getHighBidProd1 = function () {
        var _this = this;
        this._bidService.getHighBidProd1()
            .then(function (data) { _this.highbid1 = data; })
            .catch();
    };
    ResultComponent.prototype.getHighBidProd2 = function () {
        var _this = this;
        this._bidService.getHighBidProd2()
            .then(function (data) { _this.highbid2 = data; })
            .catch();
    };
    ResultComponent.prototype.getHighBidProd3 = function () {
        var _this = this;
        this._bidService.getHighBidProd3()
            .then(function (data) { _this.highbid3 = data; })
            .catch();
    };
    ResultComponent.prototype.clearBids = function () {
        var _this = this;
        this._bidService.clearBids()
            .then(function () { _this._router.navigate(['/']); })
            .catch();
    };
    ResultComponent.prototype.logout = function () {
        var _this = this;
        this._bidService.logout()
            .then(function () { _this._router.navigate(['/login']); })
            .catch();
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-result',
        template: __webpack_require__("../../../../../src/app/result/result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/result/result.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ResultComponent);

var _a, _b;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map