import { stringComparator } from '../utils/index.js';
import queue from "../queue.js";
import client from "../cache.js";
import jsonDb from '../../db.json' assert { type: "json" };
let db;

export function initializeDatabase() {
    db = jsonDb || {};
    console.log('Database initialized', db);
}


export function retrieveAllTweets() {
    db.tweets.sort((a, b) => stringComparator(a.timestamp, b.timestamp));
    return db.tweets;
}

export function retrieveUserTweets(userId) {
    const query = db.tweets.filter(({ author }) => author === userId);
    return query;
}

export async function retrieveFollowingTweets(userId) {
    const user = db.users.find(({ id }) => userId === id);
    if (!user) {
        return [];
    }
    const cachedQuery = await client.get(String(userId))
    if (cachedQuery) {
        return JSON.parse(cachedQuery);
    }
    const query = db.tweets.filter(({ author }) => user.following.includes(author))
    if (query) {
        await client.set(String(userId), JSON.stringify(query), {
            EX: 5,
        })
        console.log('returning', query)
        return query;
    }
    return [];
}

export function sendPasswordRequest() {
    const queueResponse = queue.add('email: ', {
        body: 'Password reset request received!',
        email: 'rahman.aryan07@gmail.com' // user.email
    }, { delay: 2000, removeOnComplete: true, removeOnFail: false  })
    return queueResponse
}

export async function verifyPasswordReset(token) {
    const tokenExists = await client.get(`token:${token}`)
    if (tokenExists) {
        return true
    }
    return false
}