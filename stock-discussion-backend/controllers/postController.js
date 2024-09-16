const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { stockSymbol, title, description, tags } = req.body;
    try {
        const post = new Post({
            stockSymbol, title, description, tags, user: req.user._id
        });
        await post.save();
        res.status(201).json({ success: true, postId: post._id, message: 'Post created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Additional methods for retrieving, liking, deleting posts

