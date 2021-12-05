$(function(){
    $('.button-entry').on('click',function () {
     
    $('.modal-entry').show();
    });
 
    $('.main').on('click',function () {
      
    $('.modal-entry').hide();
    });
});

$(function(){
    $('.button-new-user').on('click',function () {
     
    $('.modal-new-user').show();
    });
 
    $('.main').on('click',function () {
      
    $('.modal-new-user').hide();
    });
});

$(function(){
    $('.modal-button-enter').on('click',function () {
        $('.modal-entry').hide();
        $('.modal-new-user').show();
    }); 
    
});

$(function(){
    $('.modal-button-create').on('click',function () {
        $('.modal-new-user').hide();
        $('.modal-entry').show();
    }); 
    
});