$( "#first-form" ).click(function( event ) {
    event.preventDefault();
      });

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });  
        rules( "#first-form", {
            rules: {
                x: {
                  required: true,
                  range: [-4, 4]
                }
              }
            });
    