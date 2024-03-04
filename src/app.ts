type Message = string;
type Title = string;
type Id = string;

interface Tweet {
        id: Id;
        message: Message;
}

interface TweetView {
        id: Id;
        tweets: Tweet[]
}

const createMainTweet = () => {
    const id = crypto.randomUUID();
    const tweet = createTweet();

    return {
        id,
        tweets: [tweet],
    }
}

const createTweet = () => {
    const id = crypto.randomUUID();
    const message = '';

    return {
        id,
        message
    }
}


const renderView = (TweetView: TweetView )=>{
    let view = document.querySelector('#container-' + TweetView.id);

    if (view){
        view.innerHTML = "";

    }else{
        view = document.createElement('div');
        view.id = 'container-' + TweetView.id;
        view.classList.add('mainContainer');
        document.querySelector('#tweets')?.append(view);

    }

    for (const tweet of TweetView.tweets){

    }

    function renderTweet(
        TweetView: TweetView, 
        view: HTMLDivElement, 
        tweet: Tweet
        ){
            const tweetContainer = document
        }
}