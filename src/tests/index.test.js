import app from '../app.js';
import { describe, it, after } from 'node:test';
import { promisify } from 'node:util';
import assert from 'node:assert/strict';

describe('All tests for mini twitter assuming I am user 1', async () => {
    let baseUrl = 'http://localhost:3002/v1/';
    const server = app.listen(3002, () => {
        console.log('Test Server is running on port 3002');
    });
    
    after(async () => await promisify(server.close).call(server))

    const allTweets = [
        {
            "id": 1,
            "author": 1,
            "body": "hi this is me!",
            "timestamp": "2024-01-12T15:51:17.055761"
        },
        {
            "id": 3,
            "author": 3,
            "body": "having a great day!",
            "timestamp": "2024-01-18T15:21:17.055761"
        },
        {
            "id": 2,
            "author": 2,
            "body": "welcome to my tweet",
            "timestamp": "2024-01-18T15:51:17.055761"
        }
    ]
    const followingTweets = [
        {
            "id": 2,
            "author": 2,
            "body": "welcome to my tweet",
            "timestamp": "2024-01-18T15:51:17.055761"
        }
    ]
    const postedTweets = [
        {
            "id": 1,
            "author": 1,
            "body": "hi this is me!",
            "timestamp": "2024-01-12T15:51:17.055761"
        }
    ]
    await it('should return all tweets sorted by timestamp', async () => {
        const requestUrl = baseUrl + 'tweets/';
        const response = await fetch(requestUrl);
        const body = await response.json()
        assert.equal(response.status, 200);
        assert.deepEqual(body, allTweets);
    })
    await it('should return all tweets from users I follow', async () => {
        const requestUrl = baseUrl + 'users/1/tweets/following/';
        const response = await fetch(requestUrl);
        const body = await response.json()
        assert.equal(response.status, 200);
        assert.deepEqual(body, followingTweets);
    })
    await it('should return all tweets that I posted', async () => {
        const requestUrl = baseUrl + 'users/1/tweets/';
        const response = await fetch(requestUrl);
        const body = await response.json()
        assert.equal(response.status, 200);
        assert.deepEqual(body, postedTweets);
    })
})