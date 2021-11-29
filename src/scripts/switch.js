$('.modal-switch-button').on('click',function(){
    $(this).toggleClass('modal-switch-on');
    if ($(this).hasClass('modal-switch-on')) {
      $(this).trigger('on.switch');
    } else {
      $(this).trigger('off.switch');
    }
});

$('.modal-switch-button').on('on.switch', function(){
    $('.modal-switch-button').removeClass('modal-switch-off')
});

$('.modal-switch-button').on('off.switch', function(){
    $('.modal-switch-button').addClass('modal-switch-off')
    
});