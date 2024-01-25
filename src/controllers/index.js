import { retrieveAllTweets, retrieveFollowingTweets, retrieveUserTweets, sendPasswordRequest, verifyPasswordReset } from "../services/index.js";

export function getAllTweets(req, res) {
    const tweets = retrieveAllTweets();
    return res.send(tweets);
}
export function getUserTweets(req, res) {
    const userId = Number(req.params.userId);
    const tweets = retrieveUserTweets(userId);
    return res.send(tweets);
}
export async function getUserFollowingTweets(req, res) {
    const userId = Number(req.params.userId);
    const tweets = await retrieveFollowingTweets(userId);
    return res.send(tweets);
}

export function requestPasswordReset(req, res) {
    if (sendPasswordRequest(req.body.email)) {
        return res.send({ message: "Password Reset Request sent to your mail" });
    }
    return res.sendStatus(500)
}

export async function resetPassword(req, res) {
    const token = req.query.token;
    if(!token) {
        return res.status(400)
    }
    const verification = await verifyPasswordReset(token)
    if (!verification) {
        return res.status(400).send("Password cannot be reset")
    }
    return res.send("Password can be reset");
}