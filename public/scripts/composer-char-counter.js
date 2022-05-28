$(() => {
  const $input = $('#tweet-text');
  
  $input.on('input', function() {
    const inputLength = $(this).val().length;
    const $counter = $(this).next().children('.counter');
   
    const maxLength = 140;
    const remaining = maxLength - inputLength;

    // counter turns red when negative
    (remaining < 0) ? $counter.css('color', 'red') : $counter.css('color', 'black');
  
    $counter.text(remaining);
  });
});

