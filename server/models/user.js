import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema({
	name: String,
	username: String,
	password: String,
	date: Date,
  follows: Array,
	friends: Array
});

export default mongoose.model('User', User)
