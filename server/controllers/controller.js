var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bid = mongoose.model('Bid');

module.exports = {

  login: function(req, res){
    console.log("in users controller's create method");
		User.findOne(req.body).exec(function(err, user){
			if(user){
				console.log("user in db")
				req.session.userId = user._id;
				res.json(user);
			}else{
				var newUser = new User(req.body);
				newUser.save(function(err, user){
					if(err){
						console.log("something went wrong");
						res.json(err);
					}else{
						console.log("created user");
						req.session.userId = user._id;
						res.json(user);
					}
				})
			}
		})
	},
  getCurrUser: function(req, res){
    console.log("in users controller's getCurrent method");
		User.findOne({_id: req.session.userId}).exec(function(err, foundUser){
			if(err){
				console.log('something went wrong');
				res.json(err);
			}else{
				console.log("found current user");
				res.json(foundUser);
			}
		})
  },
  placeBid: function(req, res){
    console.log('placing bid...in controller');
    Bid.find({_product: req.body._product}).sort("-amount").limit(1).exec(function(err, bid){
    //  console.log(bid[0].amount + "found bid amount");
    //  console.log(req.body.amount + "req body amount");
      if(bid.length && req.body.amount < bid[0].amount){
        return res.status(500).send("Bid must be higher then current max bid");
      }
      else{
        //console.log(req.body);
        var bid = new Bid(req.body);
        //console.log(bid);
        bid.save(function(err, bid){
          if(err){
            console.log("error saving bid");
            res.json(err);
          }
          else{
            console.log("bid placed");
            res.json(bid);
          }
        })
      }
    })
  },
  getBids: function(req,res){
    Bid.find({}).populate('_user').sort('-amount').exec(function(err, bids){
      if(err){
        console.log("error getting all bids");
        res.json(err);
      }
      else{
        console.log("got all bids");
        //console.log(bids);
        res.json(bids);
      }
    })
  },
  getHighBidProd1: function(req,res){
    Bid.find({_product: 'product1'}).populate('_user').sort('-amount').limit(1).exec(function(err, bid){
      if(err){
        console.log("error getting high bid 1")
        res.json(err);
      }
      else{
        console.log("got high bid 1");
        res.json(bid);
      }
    })
  },
  getHighBidProd2: function(req,res){
    Bid.find({_product: 'product2'}).populate('_user').sort('-amount').limit(1).exec(function(err, bid){
      if(err){
        console.log("error getting high bid 1")
        res.json(err);
      }
      else{
        console.log("got high bid 1");
        res.json(bid);
      }
    })
  },
  getHighBidProd3: function(req,res){
    Bid.find({_product: 'product3'}).populate('_user').sort('-amount').limit(1).exec(function(err, bid){
      if(err){
        console.log("error getting high bid 3")
        res.json(err);
      }
      else{
        console.log("got high bid 3");
        res.json(bid);
      }
    })
  },
  clearBids: function(req, res){
    Bid.remove({}).exec(function(err, bids){
      if(err){
        console.log("error clearing bids");
        res.json(err);
      }
      else {
        console.log("bids cleared");
        res.json(bids);
      }
    })
  },
  logout: function(req, res){
    req.session.userId = null;
    res.json(req.session.userId);
  },
  // search: function(req, res){
  //   console.log(req.body);
  //   User.find({ name: req.body.data }).exec(function(err, user){
  //     if(err){
  //       res.json(err);
  //     }
  //     else{
  //       Bid.find({ _user: user._id }).populate('_user').exec(function(err, bid){
  //         if(err){
  //           res.json(err);
  //         }
  //         else{
  //           res.json(bid);
  //         }
  //       })
  //     }
  //   })
  //   Bid.find({ amount: req.body.data }).populate('_user').exec(function(err, bid){
  //     if(err){
  //       res.json(err);
  //     }
  //     else{
  //       res.json(bid);
  //     }
  //   })
  // }

}
