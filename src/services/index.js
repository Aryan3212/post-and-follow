import { getAllTweets, getFollowingTweets, getAllUserTweets } from "../repository/index.js"

export function retrieveAllTweets() {
    return getAllTweets()
}

export function retrieveUserTweets(userId) {
    return getAllUserTweets(userId);
}

export function retrieveFollowingTweets(userId) {
    return getFollowingTweets(userId);
}