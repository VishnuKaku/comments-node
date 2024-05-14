import commentService from "../services/comments.service.js"

const getAllComments = async (req, res) => {
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCommenterByCommenterId = async (req, res) => {
    const commenterId = req.params.id; 
    try {
        const commenter = await commentService.getcommenterBycommenterId(commenterId);
        res.status(200).json(commenter); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSuggestionBySuggestionId = async (req, res) => {
    const suggestionId = req.params.id; 
    try {
        const suggestion = await commentService.getsuggestionBysuggestionId(suggestionId);
        res.status(200).json(suggestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createComment = async (req, res) => {
    try {
        const comment = await commentService.createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteComment = async (req, res) => {
    const id = req.params.id;
    try {
        await commentService.deleteComment(id);
        res.status(204).send(); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { getAllComments, getCommenterByCommenterId, getSuggestionBySuggestionId, createComment, deleteComment };