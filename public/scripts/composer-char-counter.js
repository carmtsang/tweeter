$(document).ready(() => {
  console.log('boom')

  const $input = $('#tweet-text');

  $input.on('input', () => {
    console.log(this)
  })

});

