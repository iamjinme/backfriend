import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Comments = new Schema({
  author: {
    id: Schema.Types.ObjectId,
    username: String
  },
  text: String,
  date: Date
});

const Post = new Schema({
	author: {
    id: Schema.Types.ObjectId,
    username: String
  },
	title: String,
	body: String,
  image: String,
	date: Date,
  comments: [Comments]
});

export default mongoose.model('Post', Post)
