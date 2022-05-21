$(() => {
  $('.new-tweet').hide();
  $('#scroll-up').hide();
  
  $('.nav-right').click(function() {
    $('.new-tweet').toggle()
  })

  $(window).scroll(function() {
    $('#scroll-up').show();
  })

  $('#scroll-up').click(function() {
    $(window).scrollTop(0, 0);
  })




});