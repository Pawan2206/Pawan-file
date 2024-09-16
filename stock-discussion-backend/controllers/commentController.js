const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.addComment = async (req, res) => {
    const { comment } = req.body;
    const postId = req.params.postId;
    try {
        const newComment = new Comment({ comment, user: req.user._id, post: postId });
        await newComment.save();
        res.status(201).json({ success: true, commentId: newComment._id, message: 'Comment added successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
