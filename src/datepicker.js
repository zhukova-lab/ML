//datepicker
import './scripts/jquery-datepicker-extension-range-min.js'
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-ui/ui/i18n/datepicker-ru.js'




$(function() {
    $('.datepicker').datepicker({
        range: 'period', 
        numberOfMonths: 1,
        minDate: 0,
        showButtonPanel: true,
        currentText:'очистить',
        onSelect: function(dateText, inst, extensionRange) {
          // extensionRange - объект расширения
            $('[name=startDate]').val(extensionRange.startDateText);
            $('[name=endDate]').val(extensionRange.endDateText);
        }
    });
    $('.datepicker').datepicker('setDate', ['+4d', '+8d']);
  
    // объект расширения (хранит состояние календаря)
    var extensionRange = $('.datepicker').datepicker('widget').data('datepickerExtensionRange');
    if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
    if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);

});
$(function() {
$('.datepicker').hide()

$('[name=startDate]').on('click',function(){
    $('.datepicker').show()
})
$('[name=endDate]').on('click',function(){
    $('.datepicker').show()
})
})


