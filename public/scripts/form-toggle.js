$(() => {
  // hide new tweet & scroll
  $('.new-tweet').hide();
  $('#scroll-up').hide();
  
  // toggle new tweet section using right nav button
  $('.nav-right').click(function() {
    $('.new-tweet').toggle();
  });

  // if window is at top, hide button, else show button
  $(window).scroll(function() {
    if ($(window).scrollTop() === 0) {
      $('#scroll-up').hide();
    } else {
      $('#scroll-up').show();
    }
  });

  // scroll to top when clicked
  $('#scroll-up').click(function() {
    $(window).scrollTop(0, 0);
  });
});