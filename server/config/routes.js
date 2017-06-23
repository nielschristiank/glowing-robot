var Controller = require('./../controllers/controller.js');
var path = require('path');
//Mongoose controllers
function authenticate(req,res,next){
  if(!req.session.userId){
    console.log("user not in session");
    res.sendStatus(401);
  }
  else{
    next();
  }
}
module.exports = function(app) {

  app.post('/api/login', Controller.login);

  app.use(authenticate);

  app.get('/api/getCurrUser', Controller.getCurrUser);

  app.post('/api/placeBid', Controller.placeBid);

  app.get('/api/getBids', Controller.getBids);

  app.get('/api/getHighBidProd1', Controller.getHighBidProd1);
  app.get('/api/getHighBidProd2', Controller.getHighBidProd2);
  app.get('/api/getHighBidProd3', Controller.getHighBidProd3);

  app.get('/api/clearBids', Controller.clearBids);

  app.get('/api/logout', Controller.logout);

  // app.post('/api/search', Controller.search);

  app.all('*', function(req, res, next){
    res.sendFile(path.resolve('./mean-belt-app/dist/index.html'));
  });

}
