$(() => {
  const renderTweets = tweets => {
    for (const tweet of tweets) {
      let $post = createTweetElement(tweet);
      $('#tweets-container').prepend($post);
    }
  };
  
  const escape = str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = tweet => {
    const content = escape(tweet.content.text);
    let $tweet =
      `<article>
        <header>
          <div class="user">
            <img src="${tweet.user.avatars}">
            <span>${tweet.user.name}</span>
          </div>
          <p class="handle">${tweet.user.handle}</p>
        </header>
        <p class="tweet-body">${content}</p>
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
  loadTweet();
  
  // Submitting tweets
  $('form').submit(function(event) {
    event.preventDefault();
    const $data = $(this).serialize();
  
    const $length = $(this).children('#tweet-text').val().length;

    if ($length > 140) {
      alert('Tweet is too long');
    } else if (!$length) {
      alert('Please input a tweet');
    } else {
      $.post('/tweets', $data)
        .then(() =>$(this).trigger('reset') && $('.counter').text(140))
        .then(() => loadTweet());
    }
  });
});