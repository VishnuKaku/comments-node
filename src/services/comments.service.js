import Comment from '../models/comment.js';

// Create a comment
const createComment = async (commentData) => {
  const newComment = new Comment(commentData);
  try {
    const savedComment = await newComment.save();
    return savedComment;
  } catch (err) {
    throw new Error(`Error creating comment: ${err.message}`);
  }
};

// Get all comments
const getAllComments = async () => {
  try {
    const comments = await Comment.find().populate('commenter').populate('suggestion');
    return comments;
  } catch (err) {
    throw new Error(`Error fetching comments: ${err.message}`);
  } 
};

// Get a specific comment by ID
const getCommentById = async (commentId) => {
  try {
    const comment = await Comment.findById(commentId)
      .populate('commenter')
      .populate('suggestion'); 

    if (!comment) {
      throw new Error('Comment not found');
    }
    return comment;
  } catch (err) {
    throw new Error(`Error fetching comment with ID ${commentId}: ${err.message}`);
  }
};

// Delete a comment by ID
const deleteComment = async (commentId) => {
  try {
    await Comment.findByIdAndDelete(commentId);
  } catch (err) {
    throw new Error(`Error deleting comment with ID ${commentId}: ${err.message}`);
  }
};

export {
  createComment,
  getAllComments,
  getCommentById,
  deleteComment,
};