$( function() {
    $( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 15000,
      step: 500,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( ".slider-amount" ).val(ui.values[ 0 ].toLocaleString() + "₽" + " - " + ui.values[ 1 ].toLocaleString() + "₽");
      }
    });
    $( ".slider-amount" ).val($( ".slider-range" ).slider( "values", 0 ).toLocaleString() + "₽" +
      " - " + $( ".slider-range" ).slider( "values", 1 ).toLocaleString() + "₽");
  } );