import jsonDb from '../../../../db.json' assert { type: "json" };;

let db;

export function initializeDatabase() {
    db = jsonDb || {};
    console.log('Database initialized', db);
}

export function getAllTweets() {
    return db.tweets;
}

export function getUser(userId) {
    const query = db.users.find(({ id }) => userId === id);
    if (query) {
        return query;
    }
    return null;
}

export function getFollowingTweets(userId) {
    const user = db.users.find(({ id }) => userId === id);
    if (!user) {
        return [];
    }
    const query = db.tweets.filter(({ author }) => user.following.includes(author));
    if (query) {
        return query;
    }
    return [];
}


export function getAllUserTweets(userId) {
    console.log('arra', userId);
    const query = db.tweets.filter(({ author }) => author === userId);
    return query;
}

