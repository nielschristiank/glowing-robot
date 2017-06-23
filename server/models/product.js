var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  _bids: [{type: Schema.Types.ObjectId}],
}, {timestamps:true});

mongoose.model('Product', ProductSchema);
