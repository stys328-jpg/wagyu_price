$(function(){
  $('#page-top a').click(function(e) { 
    e.preventdefault();
    var position = 0;
    var spead = 500;
    $('html,body').animate({
      scrolltop:position,
    },speed, 'swing');
    return false;
    });
  });

