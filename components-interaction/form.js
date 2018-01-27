(function captureFormInput(){

	// this function needs to capture the input from the form elements and update the 
	// 'progress$' observable 

	var emailField = $('#emailField'),
		selectField = $('#selectField'),
		numberField = $('#numberField'),
		textField = $('#textField'),
		checkboxField = $('#checkboxField');		

		// The below code creates and merges an observable from an event for each field		
		Rx.Observable.merge(
				Rx.Observable.fromEvent(emailField, 'keyup'),
				Rx.Observable.fromEvent(selectField, 'change'),
				Rx.Observable.fromEvent(numberField, 'change'),
				Rx.Observable.fromEvent(textField, 'keyup'),
				Rx.Observable.fromEvent(checkboxField, 'change')
			).subscribe(function(){
					var progress = dummyCalculateProgress();  
					wif.progress$.next(progress); // notify the observable
				}); 	


		// we don't care how this works, just give us the progress 
		function dummyCalculateProgress(){

			var progress = 0;

			if(emailField.val()){
				progress += 20;
			} 		

			if(selectField.val().length > 0){
				progress += 20;
			}

			if(numberField.val().length > 0){
				progress += 20;
			}

			if(textField.val()){
				progress += 20;
			}

			if(checkboxField.prop('checked')) {
				progress += 20; 
			}		

			return progress; 			
		};

})();