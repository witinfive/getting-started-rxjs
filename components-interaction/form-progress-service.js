(function initialiseFormProgressSubjects(){

	// We declare an observable to use to keep track of the progress
	// A "Subject" is both an observable and an observer 	
	
	wif.progress$ = new Rx.Subject();	

})();