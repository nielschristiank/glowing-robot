var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BidSchema = mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  _product: {type: String, required: true},
  amount: {type: Number, required: true, min: 1},
}, {timestamps:true});

mongoose.model('Bid', BidSchema);
