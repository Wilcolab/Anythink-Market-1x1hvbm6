/**
 * Comments API Router
 * 
 * Handles CRUD operations for comments on posts.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET /
 * Retrieves all comments from the database
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>} Responds with JSON array of all comments
 * @throws {Error} Passes error to next middleware if query fails
 */

/**
 * DELETE /:commentId
 * Deletes a comment by its ID
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>} Responds with 200 status code on success
 * @throws {Error} Passes error to next middleware if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, I want to create a new comment on a post. The comment should have the following fields: content, author, postId. The content field should be a string, the author field should be a reference to the User model, and the postId field should be a reference to the Post model. Please write the code for the route that creates a new comment.
router.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.log(err);
        next(err);
    }
});
// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndRemove(req.params.commentId);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});