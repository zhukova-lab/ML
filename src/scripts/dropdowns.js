//-guests

$('.dropdown-guests').hide();

let guests = $('.guests')

$(function(){
    $('.guests').on('click',function () {
        $('.dropdown-guests').show();
    });
});

$(function(){
    $('.dropdown-button-apply').on('click',function () {
        $('.dropdown-guests').hide()
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
    $('.dropdown-button-clear').on('click',function () {
        buttonMinusAdults.next().html(currentAdults = 0)
        buttonMinusChildren.next().html(currentChildren = 0)
        buttonMinusBabies.next().html(currentBabies = 0)
        buttonMinus.prop("disabled",true)
        $('.dropdown-button-clear').hide()
    })
})

$('.dropdown-button-clear').hide()
let buttonPlus = $('.guests-stepper-button-plus');
let buttonMinus = $('.guests-stepper-button-minus');

$(function(){
    $(buttonPlus).on('click',function () {
        $('.dropdown-button-clear').show()
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


//-comfort
$('.dropdown-comfort').hide();

let comfort = $('.comfort')

$(function(){
    $('.comfort').on('click',function () {
        $('.dropdown-comfort').show();
    });
});


let buttonMinusBedroom = $('.comfort-stepper-button-bedroom-minus');
let buttonPlusBedroom = $('.comfort-stepper-button-bedroom-plus');
let currentBedroom = buttonPlusBedroom.prev().html()

$(function(){
    $(buttonMinusBedroom).on('click',function () {
        buttonMinusBedroom.next().html(--currentBedroom)
         if(currentBedroom === 0) {
            buttonMinusBedroom.prop("disabled",true)
        }
    })
});

$(function(){
    $(buttonPlusBedroom).on('click',function () {
        buttonPlusBedroom.prev().html(++currentBedroom)
        if(buttonMinusBedroom.next().html() > 0) {
            buttonMinusBedroom.prop("disabled",false)
        }
    })
})

$(function(){
    buttonMinusBedroom.prop("disabled",true)
    buttonMinusBed.prop("disabled",true)
    buttonMinusBathroom.prop("disabled",true)
})

let buttonMinusBed = $('.comfort-stepper-button-bed-minus');
let buttonPlusBed = $('.comfort-stepper-button-bed-plus');
let currentBed = buttonPlusBed.prev().html()

$(function(){
    $(buttonMinusBed).on('click',function () {
        buttonMinusBed.next().html(--currentBed)
         if(currentBed === 0) {
            buttonMinusBed.prop("disabled",true)
        }
    })
});

$(function(){
    $(buttonPlusBed).on('click',function () {
        buttonPlusBed.prev().html(++currentBed)
        if(buttonMinusBed.next().html() > 0) {
            buttonMinusBed.prop("disabled",false)
        }
    })
})


let buttonMinusBathroom = $('.comfort-stepper-button-bathroom-minus');
let buttonPlusBathroom = $('.comfort-stepper-button-bathroom-plus');
let currentBathroom = buttonPlusBathroom.prev().html()

$(function(){
    $(buttonMinusBathroom).on('click',function () {
        buttonMinusBathroom.next().html(--currentBathroom)
         if(currentBathroom === 0) {
            buttonMinusBathroom.prop("disabled",true)
        }
    })
});

$(function(){
    $(buttonPlusBathroom).on('click',function () {
        buttonPlusBathroom.prev().html(++currentBathroom)
        if(buttonMinusBathroom.next().html() > 0) {
            buttonMinusBathroom.prop("disabled",false)
        }
    })
})

let bedroom = $('.bedroom')
let bed = $('.bed')
let bathroom = $('.bathroom')


$(function(){
    $('.rooms').on('click',function () {
        $('.dropdown-comfort').hide();
        if(currentBedroom === '0') {
            comfort.val(bed.html() + ': ' + currentBed + ', ' +  bathroom.html() + ': ' + currentBathroom) 
        } else if (currentBed === '0') {
            comfort.val(bedroom.html() + ': ' + currentBedroom +  ', ' + bathroom.html() + ': ' + currentBathroom) 
        } else if (currentBathroom === '0') {
            comfort.val(bedroom.html() + ': ' + currentBedroom + ', ' + bed.html() + currentBed) 
        } else {
            comfort.val(bedroom.html() + ': ' + currentBedroom + ', ' +  bed.html() + ': ' + currentBed + ', ' + bathroom.html() + ': ' + currentBathroom) 
        }
    })
})
