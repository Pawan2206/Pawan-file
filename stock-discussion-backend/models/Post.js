const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    stockSymbol: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
