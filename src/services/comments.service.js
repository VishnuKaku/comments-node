import Comment from '../models/comments.model.js';

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
const getCommenterByCommenterId = async (commenterId) => {
  try {
      const commenter = await Comment.findOne({commenter: commenterId})
      return commenter;
  } catch (error) {
      throw new Error('Failed to fetch commenter by commenter ID');
  }
};

const getSuggestionBySuggestionId = async (suggestionId) => {
  try {
    console.log(suggestionId)
      const suggestion = await Comment.findOne({suggestion: suggestionId})
      return suggestion;
  } catch (error) {
      throw new Error('Failed to fetch suggestion by suggestion ID');
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

const commentService =  {
  createComment,
  getAllComments,
  getCommenterByCommenterId,
  getSuggestionBySuggestionId,
  deleteComment,
};

export default commentService;