$(document).ready(() => {
  const $input = $('#tweet-text');

  $input.on('input', function() {
    // currentInput = what is typed into the textbox
    const $currentInput = $(this).val()
    let $count = Number($('.counter strong').text());
    
    // +1 input = -1 count & -1 input = +1 count
    if ($currentInput.length + 1) {
      $count -= 1;
    } else if ($currentInput.length - 1) {
      $count +=1
    };
    // counter red when less than 0
    if ($count < 0) {
      $('.counter strong').css('color', 'red');
    };

    $('.counter strong').text($count);
  });

});

