import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate';

var Schema = mongoose.Schema

const User = new Schema({
	name: String,
	username: String,
	password: String,
	date: Date,
  follows: Array,
	friends: Array
});

// Plug in paginate
User.plugin(mongoosePaginate);

export default mongoose.model('User', User)
