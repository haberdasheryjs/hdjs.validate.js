var validate = require('hdjs.validate');
var validator = new validate.FormValidator();

var validationCallback = function(errors) {
	if(errors.length > 0) {
		for (var i = 0; i < errors.length; i++) {
			Ti.API.debug(errors[i].message);
		}
		alert(errors[0].message);
	} else {
		alert('Hooray! Your form is valid!');
	}
};


var returnCallback = function() {
	validator.run([
				{
					id: 'nameField',
				    value: $.nameField.value,
				    display: 'Name',    
				    rules: 'required|min_length[6]|max_length[12]'
				},
				{
					id: 'emailField',
				    value: $.emailField.value,
				    display: 'Email',    
				    rules: 'required|valid_email'
				},
				{
					id: 'passwordField',
				    value: $.passwordField.value,
				    display: 'Password',    
				    rules: 'required|alpha_numeric|exact_length[10]'
				},
				{
					id: 'privacyField',
				    value: $.privacySwitch.value,
				    display: 'Privacy',    
				    rules: 'matches[true]'
				}
			], validationCallback);	
};

$.submitButton.addEventListener('click', returnCallback);

$.win.open();
