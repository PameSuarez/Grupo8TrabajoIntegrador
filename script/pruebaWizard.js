function success() {
  document.getElementsByClassName(".exito").style = "display:block";
}

jQuery(document).ready(function() {
  
	// click on next button
	jQuery('.form-wizard-next-btn').click(function() {
    $("#basic-form").validate();
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();
      var email = $(".input input[name=email]").val();
      var regex = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;

			if( thisValue == "") {
        jQuery(this).siblings(".wizard-form-error .wizard-email.error").slideDown();
        console.log("valores");
				nextWizardStep = false;
			}

       
    
     
			else {
				jQuery(this).siblings(".wizard-form-error .wizard-email.error").slideUp();
        
    	}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
  //click on previous button
  jQuery(".form-wizard-previous-btn").click(function () {
    var counter = parseInt(jQuery(".wizard-counter").text());
    var prev = jQuery(this);
    var currentActiveStep = jQuery(this)
      .parents(".form-wizard")
      .find(".form-wizard-steps .active");
    prev.parents(".wizard-fieldset").removeClass("show", "400");
    prev
      .parents(".wizard-fieldset")
      .prev(".wizard-fieldset")
      .addClass("show", "400");
    currentActiveStep
      .removeClass("active")
      .prev()
      .removeClass("activated")
      .addClass("active", "400");
    jQuery(document)
      .find(".wizard-fieldset")
      .each(function () {
        if (jQuery(this).hasClass("show")) {
          var formAtrr = jQuery(this).attr("data-tab-content");
          jQuery(document)
            .find(".form-wizard-steps .form-wizard-step-item")
            .each(function () {
              if (jQuery(this).attr("data-attr") == formAtrr) {
                jQuery(this).addClass("active");
                var innerWidth = jQuery(this).innerWidth();
                var position = jQuery(this).position();
                jQuery(document)
                  .find(".form-wizard-step-move")
                  .css({ left: position.left, width: innerWidth });
              } else {
                jQuery(this).removeClass("active");
              }
            });
        }
      });
  });
  //click on form submit button
  /*jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		
	});*/
  // focus on input field check empty or not
  jQuery(".form-control")
    .on("focus", function () {
      var tmpThis = jQuery(this).val();
      if (tmpThis == "") {
        jQuery(this).parent().addClass("focus-input");
      } else if (tmpThis != "") {
        jQuery(this).parent().addClass("focus-input");
      }
    })
    .on("blur", function () {
      var tmpThis = jQuery(this).val();
      if (tmpThis == "") {
        jQuery(this).parent().removeClass("focus-input");
        jQuery(this).siblings(".wizard-form-error").slideDown("3000");
      } else if (tmpThis != "") {
        jQuery(this).parent().addClass("focus-input");
        jQuery(this).siblings(".wizard-form-error").slideUp("3000");
      }
    });
  $(".enviar").on("click", function () {
    $(".exito").css("display", "block");
  });

  $(".resumen").on("click", function () {
    var nombre = document.getElementById("fname").value;
    var apellido = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pais = document.getElementById("country").value;
    var ciudad = document.getElementById("city").value;
    var domicilio = document.getElementById("address").value;

    var lista1 = document.getElementById("product");
    // Obtener el valor de la opción seleccionada
    var valorSeleccionado1 = lista1.options[lista1.selectedIndex].value;
    // Obtener el texto que muestra la opción seleccionada
    var valorSeleccionado1 = lista1.options[lista1.selectedIndex].text;

    var lista2 = document.getElementById("activity");
    // Obtener el valor de la opción seleccionada
    var valorSeleccionado2 = lista2.options[lista2.selectedIndex].value;
    // Obtener el texto que muestra la opción seleccionada
    var valorSeleccionado2 = lista2.options[lista2.selectedIndex].text;

    var negocio = document.getElementById("typeBusiness").value;

	document.getElementById("listarNombre").innerHTML = "Nombre: " + nombre;
	document.getElementById("listarApellido").innerHTML = "Apellido: " + apellido;
	document.getElementById("listarEmail").innerHTML = "Email: " + email;
	document.getElementById("listarPais").innerHTML = "País: " + pais;
	document.getElementById("listarCiudad").innerHTML = "Ciudad: " + ciudad;
	document.getElementById("listarDomicilio").innerHTML = "Domicilio: " + domicilio;
	document.getElementById("listarProducto").innerHTML = "Producto: " + valorSeleccionado1;
	document.getElementById("listarActividad").innerHTML = "Actividad: " + valorSeleccionado2;
	document.getElementById("listarNegocio").innerHTML = "Tipo de negocio: " + negocio;
  });

});

