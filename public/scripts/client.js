$(() => {
  // hide error messages
  $(".error").hide();

  const renderTweets = tweets => {
    for (const tweet of tweets) {
      let $post = createTweetElement(tweet);
      $('#tweets-container').prepend($post);
    }
  };
  
  // function to prevent XSS
  const escape = str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = tweet => {
    const content = escape(tweet.content.text);
    const avatars = escape(tweet.user.avatars);
    const userName = escape(tweet.user.name);
    const handle = escape(tweet.user.handle);
   
    return `<article>
      <header>
        <div class="user">
          <img src="${avatars}">
          <span>${userName}</span>
        </div>
        <p class="handle">${handle}</p>
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
      $('.error').slideDown('slow', function() {
        $(this).text('Your tweet is too long! Please keep within the 140 limit.');
      });
    } else if (!$length) {
      $('.error').slideDown('slow', function() {
        $(this).text("You didn't even tweet! Please enter something...anything!");
      });
    } else {
      $.post('/tweets', $data)
        .then(() => $(".error").slideUp())
        .then(() => $(this).trigger('reset') && $(this).find('.counter').text(140))
        .then(() => loadTweet());
    }
  });
});