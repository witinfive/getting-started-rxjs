(function progressBar() {

	// this function is responsible for updating the progress bar
	// the progress is stored in an observable called "progress$" declared separately

	var progressBar = $('#progress-bar');

	// we subscribe to the progress observable and update the progress bar attributes as required by Bootstrap 
	wif.progress$.subscribe(function(progress) {

		progressBar.attr('aria-valuenow', progress);
 		progressBar.css('width', progress + '%'); 

	});

 
})();