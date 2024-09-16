exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (post.likes.includes(req.user._id)) {
            return res.status(400).json({ message: 'Post already liked' });
        }
        post.likes.push(req.user._id);
        await post.save();
        res.json({ success: true, message: 'Post liked' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
