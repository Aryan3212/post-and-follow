import { retrieveAllTweets, retrieveFollowingTweets, retrieveUserTweets } from "../services/index.js"
export function getAllTweets(req, res) {
    const tweets = retrieveAllTweets();
    return res.send(tweets);
}
export function getUserTweets(req, res) {
    const userId = Number(req.params.userId);
    const tweets = retrieveUserTweets(userId);
    return res.send(tweets);
}
export function getUserFollowingTweets(req, res) {
    const userId = Number(req.params.userId);
    const tweets = retrieveFollowingTweets(userId);
    return res.send(tweets);
}