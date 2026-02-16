/**
 * Express router for handling comment-related API endpoints
 * @type {Router}
 */

/**
 * Retrieves all comments for a specific post
 * @route GET /:postId
 * @param {string} req.params.postId - The ID of the post to fetch comments for
 * @returns {Object[]} Array of comment objects sorted by creation date (newest first)
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {Object} Success message upon deletion
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please
router.get("/:postId", async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId }).sort({
            createdAt: -1,
        });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});
// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});