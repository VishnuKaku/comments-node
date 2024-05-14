import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  suggestion: { type: mongoose.Schema.Types.ObjectId, ref: 'Suggestion' },
  creationDate: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
