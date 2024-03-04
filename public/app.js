"use strict";
const createMainTweet = () => {
    const id = crypto.randomUUID();
    const tweet = createTweet();
    return {
        id,
        tweets: [tweet],
    };
};
const createTweet = () => {
    const id = crypto.randomUUID();
    const message = '';
    return {
        id,
        message
    };
};
const renderView = (TweetView) => {
    var _a;
    let view = document.querySelector('#container-' + TweetView.id);
    if (view) {
        view.innerHTML = "";
    }
    else {
        view = document.createElement('div');
        view.id = 'container-' + TweetView.id;
        view.classList.add('mainContainer');
        (_a = document.querySelector('#tweets')) === null || _a === void 0 ? void 0 : _a.append(view);
    }
    for (const tweet of TweetView.tweets) {
    }
    function renderTweet(TweetView, view, tweet) {
        const tweetContainer = document;
    }
};
