import express from 'express';
import { createComment, getAllComments, getCommentById, deleteComment } from '../services/comments.service.js';

const router = express.Router();



// Create a comment (POST request)
router.post('/add', async (req, res) => {
  try {
    
    const newComment = await createComment(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    console.error(err.message); // Log the error message for debugging
    res.status(500).json({ message: 'Error creating comment' });
  }
});

// Get all comments (GET request)
router.get('/all', async (req, res) => {
  try {
    const comments = await getAllComments();
    res.json(comments);
  } catch (err) {
    console.error(err.message); // Log the error message for debugging
    res.status(500).json({ message: 'Error fetching comments' });
  }
});


// Get a specific comment by ID (GET request)
router.get('/:id', async (req, res) => { 
    try {
      // Access the ID using req.params.id
      const comment = await getCommentById(req.params.id); 
      res.json(comment);
    } catch (err) {
      console.error(err.message); 
      res.status(500).json({ message: 'Error fetching comment' });
    }
  });
// router.get('/:id', async (req, res) => {
//   try {
//     const comment = await getCommentById(req.params.commentId);
//     if (!comment) {
//       return res.status(404).json({ message: 'Comment not found' });
//     }
//     res.json(comment);
//   } catch (err) {
//     console.error(err.message); // Log the error message for debugging
//     res.status(500).json({ message: 'Error fetching comment' });
//   }
// });

// Delete a comment by ID (DELETE request)
router.delete('/:id', async (req, res) => {
  try {
    await deleteComment(req.params.commentId);
    res.status(204).send(); // No content response for successful deletion
  } catch (err) {
    console.error(err.message); // Log the error message for debugging
    res.status(500).json({ message: 'Error deleting comment' });
  }
});

export default router; // Export the router object
