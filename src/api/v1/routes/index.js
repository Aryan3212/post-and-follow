import { Router } from "express";
import { getAllTweets, getUserFollowingTweets, getUserTweets } from "../controllers/index.js";
const router = Router();

router.get('/tweets', getAllTweets);
router.get('/users/:userId/tweets/following', getUserFollowingTweets);
router.get('/users/:userId/tweets', getUserTweets);

export default router;