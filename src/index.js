import express from 'express';
import './config/db.connection.js'; 
import cors from 'cors';
import commentsRouter from './controllers/controller.js'; 

const app = express();
app.use(cors()); 
app.use(express.json());

// Mount the comments router under the '/comments' path
app.use('/comments', commentsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
