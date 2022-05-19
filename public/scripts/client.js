
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(() => {
  const renderTweets = tweets => {
    for (const tweet of tweets) {
      let $post = createTweetElement(tweet);
      $('#tweets-container').prepend($post);
    }
  };
  
  const createTweetElement = tweet => {
    let $tweet =
      `<article>
        <header>
          <div class="user">
            <img src="${tweet.user.avatars}">
            <span>${tweet.user.name}</span>
          </div>
          <p class="handle">${tweet.user.handle}</p>
        </header>
        <p class="tweet-body">${tweet.content.text}</p>
        <footer>
          <span>${tweet.created_at}</span>
          <div class="tweet-icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>`;
    return $tweet;
  };
  
  renderTweets(data);
});
