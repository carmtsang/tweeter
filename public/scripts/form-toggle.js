$(() => {
  $('.new-tweet').hide();
  
  $('.nav-right').click(function() {
    $('.new-tweet').toggle()
  })
})