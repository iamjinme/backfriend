import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate';

var Schema = mongoose.Schema

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

// Plug in paginate
Post.plugin(mongoosePaginate);

export default mongoose.model('Post', Post)
