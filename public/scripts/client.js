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
          <span>${timeago.format(tweet.created_at)}</span>
          <div class="tweet-icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>`;
    return $tweet;
  };

  const loadTweet = () => {
    $.ajax('/tweets', { method: 'GET' })
    .then(tweets => renderTweets(tweets));
  };

  // inital load of the tweets on the page
  loadTweet()
  
  // Submitting tweets
  $('form').submit(function(event) {
    event.preventDefault();
    const $data = $(this).serialize();
    // after posting, load tweet again
    $.post('/tweets', $data)
    .then(() => loadTweet());
  })
});