$(document).ready(() => {
  console.log('boom')

  const $input = $('#tweet-text');

  $input.on('input', function() {
    const $currentInput = $(this).val()
    console.log($currentInput.length)
    let $count = Number($('.counter strong').text());
    
    $count = $count - $currentInput.length
    console.log($count)
  })

});

