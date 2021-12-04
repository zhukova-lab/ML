//-guests

$('.guests-toggle').hide();

$(function(){
    $('.guests').on('click',function () {
        $('.guests-toggle').show();
    });
});

let guests = $('.guests')

$(function(){
    $('.guests-button-apply').on('click',function () {
        $('.guests-toggle').hide()
        let currentsSumm = +buttonMinusAdults.next().html() + +buttonMinusChildren.next().html() + +buttonMinusBabies.next().html()
        if (currentsSumm === 1 || currentsSumm % 10 === 1) {
            guests.val(currentsSumm + ' гость')
        } else if (currentsSumm === 12 
            || currentsSumm === 13 
            || currentsSumm === 14) {
            guests.val(currentsSumm + ' гостей')
            } else if (currentsSumm === 2 
            || currentsSumm === 3 
            || currentsSumm === 4 
            || currentsSumm % 10 === 2 
            || currentsSumm % 10 === 3 
            || currentsSumm % 10 === 4 ) {
            guests.val(currentsSumm + ' гостя')
        } else if (currentsSumm === 0) {
            guests.val('')
        } 
        else {
            guests.val(currentsSumm + ' гостей')
        }
})
})


$(function(){
    $('.guests-button-clear').on('click',function () {
        buttonMinusAdults.next().html(currentAdults = 0)
        buttonMinusChildren.next().html(currentChildren = 0)
        buttonMinusBabies.next().html(currentBabies = 0)
        buttonMinus.prop("disabled",true)
        $('.guests-button-clear').hide()
    })
})

$('.guests-button-clear').hide()
let buttonPlus = $('.guests-stepper-button-plus');
let buttonMinus = $('.guests-stepper-button-minus');

$(function(){
    $(buttonPlus).on('click',function () {
        $('.guests-button-clear').show()
    })
})


let buttonMinusAdults = $('.guests-stepper-button-adults-minus');
let buttonPlusAdults = $('.guests-stepper-button-adults-plus');
let currentAdults = buttonPlusAdults.prev().html()

$(function(){
    buttonMinusAdults.prop("disabled",true)
    buttonMinusChildren.prop("disabled",true)
    buttonMinusBabies.prop("disabled",true)
})

$(function(){
    $(buttonMinusAdults).on('click',function () {
        buttonMinusAdults.next().html(--currentAdults)
         if(currentAdults === 0) {
            buttonMinusAdults.prop("disabled",true)
        }
    })
});

$(function(){
    $(buttonPlusAdults).on('click',function () {
        buttonPlusAdults.prev().html(++currentAdults)
        if(buttonMinusAdults.next().html() > 0) {
            buttonMinusAdults.prop("disabled",false)
        }
    })
})



let buttonMinusChildren = $('.guests-stepper-button-children-minus');
let buttonPlusChildren = $('.guests-stepper-button-children-plus');
let currentChildren = buttonPlusAdults.prev().html()

$(function(){
    $(buttonMinusChildren).on('click',function () {
        buttonMinusChildren.next().html(--currentChildren)
        if(currentChildren === 0) {
            buttonMinusChildren.prop("disabled",true)
        }
    })
});

$(function(){
    $(buttonPlusChildren).on('click',function () {
        buttonPlusChildren.prev().html(++currentChildren)
        if(buttonMinusChildren.next().html() > 0) {
            buttonMinusChildren.prop("disabled",false)
        }
    })
})


let buttonMinusBabies = $('.guests-stepper-button-babies-minus');
let buttonPlusBabies = $('.guests-stepper-button-babies-plus');
let currentBabies = buttonPlusAdults.prev().html()

$(function(){
    $(buttonMinusBabies).on('click',function () {
        buttonMinusBabies.next().html(--currentBabies)
        if(currentBabies === 0) {
            buttonMinusBabies.prop("disabled",true)
        }
    })
});

$(function(){
    $(buttonPlusBabies).on('click',function () {
        buttonPlusBabies.prev().html(++currentBabies)
        if(buttonMinusBabies.next().html() > 0) {
            buttonMinusBabies.prop("disabled",false)
        }
    })
})
