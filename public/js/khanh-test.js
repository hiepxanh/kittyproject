$(document).ready(function() {
	var modal = document.getElementById('myModal');
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
    $('#test-form').on('submit', function(e) {
     	var v = grecaptcha.getResponse();
     	console.log(v);
	    if(v.length == 0)
	    {
	    		alert("You can't leave Captcha Code empty")
	    }
	    if(v.length != 0)
	    {
		// Prevent form submission
	        e.preventDefault();

	        // // Get the form instance
	        var $form = $(e.target);

	        // // Get the BootstrapValidator instance
	        var bv = $form.data($('#test-form'));

	        // Use Ajax to submit form data
	        var url = 'https://script.google.com/macros/s/AKfycbyZM_IQkLdiN_h-VRNYJjOADFr77c4Ekw3GAc-xLIRguaQ2iw/exec';
	        var redirectUrl = 'success-page.html';
	        // show the loading
	        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));

	        var jqxhr = $.post(url, $form.serialize(), function(data) {
	            console.log("Success! Data: " + data.statusText);
				modal.style.display = "block";
	        });
   	    }

    });

});
