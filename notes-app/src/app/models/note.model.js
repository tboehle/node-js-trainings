const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    // If set timestamps, mongoose assigns createdAt and updatedAt fields to your schema
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);