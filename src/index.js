import express from 'express';
import './config/db.connection.js'; 
import cors from 'cors';
import {getAllComments, getCommenterByCommenterId, getSuggestionBySuggestionId, createComment, deleteComment} from './controllers/comments.controller.js'

const app = express();
app.use(cors()); 
app.use(express.json());



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Comment requests
// ==============================================================
app.get('/comments', getAllComments);
app.get('/comments/commenter/:id', getCommenterByCommenterId); 
app.get('/comments/suggestion/:id', getSuggestionBySuggestionId); 
app.post('/comments', createComment);
app.delete('/comments/:id', deleteComment);