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