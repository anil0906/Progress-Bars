QUnit.test( "value of variables at start ", function( assert ) {
    
	
	
	assert.ok( progressBar.selected == 1, "First Progress bar is selected in dropdown at the start" );
	
	
	assert.ok(ractive.get('activeClass1')=='active',"First progress is shown active on UI at the start" );
	
	assert.ok(ractive.get('activeClass2')=='',"Second progress is shown inactive on UI at the start" );
	
	assert.ok(ractive.get('activeClass3')=='',"Third progress is shown inactive on UI at the start" );

});

QUnit.test("increment progress of progressbar ",function(assert){

	increment(25);
	assert.ok(ractive.get('progress1')==45,"progress value is correct : "+ractive.get('progress1'));
	assert.ok(ractive.get('progressLabel1')==45,"progress label is correct :"+ractive.get('progressLabel1'));
    increment(10);
	assert.ok(ractive.get('progress1')==ractive.get('progressLabel1'),"progress label matches with progress level : "+ractive.get('progress1'));
    increment(25);
    increment(25);
	assert.ok(ractive.get('progress1')==100,"progress value has reached maximum of 100 mark : "+ractive.get('progress1'));
	assert.ok(ractive.get('progressLabel1')==105,"progress label increases beyond 100 : "+ ractive.get('progressLabel1'));
	assert.ok(ractive.get("colorClass1")=='progress-bar-danger',"Color of progress bar changes : Red");
	
	assert.ok(ractive.get('progress2')==30 ,"Other progress bar 2 level remains same : "+ractive.get('progress2'));
	assert.ok(ractive.get('progressLabel2')==30,"progress  2 label remains same : "+ractive.get('progressLabel2'));	


	assert.ok(ractive.get('progress3')==50 ,"Other progress bar 3 level remains same : "+ractive.get('progress3'));
	assert.ok(ractive.get('progressLabel3')==50,"progress  3 label remains same : "+ractive.get('progressLabel3'));	
	
});

QUnit.test("decrement progress of progressbar ",function(assert){

	// template Data mock up for test case 
	decrement(25);
	assert.ok(ractive.get('progress1')==80,"progress value is reducing correctly from 100 above mark. : "+ractive.get('progress1'));
	assert.ok(ractive.get('progressLabel1')==80,"progress Label is reducing correctly from 100 above mark. : "+ractive.get('progressLabel1'));
	
	assert.ok(ractive.get("colorClass1")=='progress-bar-success',"Color of progress bar changes");
	decrement(25);
	decrement(25);
	assert.ok(ractive.get('progress1')==30,"progress value is correct");
	assert.ok(ractive.get('progressLabel1')==30,"progress label is correct");
decrement(10);
	assert.ok(ractive.get('progress1')==ractive.get('progressLabel1'),"progress label matches with progress level");
decrement(25)
	assert.ok(ractive.get('progress1')==0,'Decrement level below 0 is not allowed');
assert.ok(ractive.get('progressLabel1')==0,'Decrement label below 0 is not allowed');

	assert.ok(ractive.get('progress2')==30 ,"Other progress bar 2 level remains same");
	assert.ok(ractive.get('progressLabel2')==30,"progress  2 label remains same");	


	assert.ok(ractive.get('progress3')==50 ,"Other progress bar 3 level remains same");
	assert.ok(ractive.get('progressLabel3')==50,"progress  3 label remains same");	
	
	
});



QUnit.test("Selecting different progress Bar ",function(assert){

	progressBar.selected=2;
	increment(25);
	assert.ok(ractive.get('progress1')==0,"progress bar 1 value remains same");
	assert.ok(ractive.get('progressLabel1')==0,"progress label 1 remains same");
    assert.ok(ractive.get('progress2')==55 ,"progress bar  2 level Changes as expectedly");
	assert.ok(ractive.get('progressLabel2')==55,"progress  2 label changes as expectedly");	

   assert.ok(ractive.get('progress3')==50 ,"Other progress bar 3 level remains same");
	assert.ok(ractive.get('progressLabel3')==50,"progress  3 label remains same");	
	
});
