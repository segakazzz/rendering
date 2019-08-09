
function renderTweets(tweets) {
    let divs = tweets.map(function(tweet){
        return `
            <div class="col-12 col-md-6 tweet">
                <div class="tweet-inner">
                    <div class="tweet-user">
                        <div><img src="${tweet.user.profilePic}"></div>
                        <div class="tweet-user-info">
                            <div class="tweet-user-username">${tweet.user.username}
                                <span>${tweet.user.isVerified && '<i class="fas fa-certificate"></i>'}</span>
                            </div>
                            <div class="tweet-user-handle">${tweet.user.handle}</div>
                        </div>
                    </div>    
                    <div class="tweet-text">${tweet.text}</div>
                    <hr>
                    <div class="tweet-information">
                        <div><i class="far fa-comment"></i>${tweet.replies}</div>
                        <div><i class="fas fa-retweet"></i>${tweet.retweets}</div>
                        <div><i class="far fa-heart"></i>${tweet.likes}</div>
                    </div>
                </div>
            </div>
        `
    })
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(tweets)}</code>
            <div id="tweets" class="container">
                <div class="row">
                    ${divs.join('')}
                </div>
            </div>
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}