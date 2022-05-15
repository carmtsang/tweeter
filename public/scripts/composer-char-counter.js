$(document).ready(() => {
  console.log('boom')

  const $input = $('#tweet-text');

  $input.on('input', function() {
    const $currentInput = $(this).val()
    console.log($currentInput.length)
    let $count = Number($('.counter strong').text());
    
    if ($currentInput.length + 1) {
      $count -= 1;
    } else if ($currentInput.length - 1) {
      $count +=1
    }
    console.log($count)
    $('.counter strong').text($count)
  })

});

