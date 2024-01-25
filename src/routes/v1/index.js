import { Router } from "express";
import { getAllTweets, getUserFollowingTweets, getUserTweets, requestPasswordReset, resetPassword } from "../../controllers/index.js";
import { asyncHandler } from "../../utils/index.js";

const router = Router();

router.get('/tweets', getAllTweets);
router.get('/users/:userId/tweets/following', asyncHandler(getUserFollowingTweets));
router.get('/users/:userId/tweets', getUserTweets);
router.get('/forgot-password', requestPasswordReset);
router.get('/reset-password', asyncHandler(resetPassword));
export default router;