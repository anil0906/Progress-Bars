/* global variable to define current selected progressbar*/

var progressBar = {};
progressBar.selected = $("select option:selected").val();
Ractive.DEBUG=false;
/* ractive template data to initilize variables and data */

var ractive = new Ractive({
  el: '#progressContainer',
  template: '#template',
  data: {
       progress1: 			20,
       progressLabel1: 			20,
       activeClass1: 'active',
       colorClass1: 'progress-bar-success',
      progress2: 			30,
       progressLabel2: 			30,
       activeClass2: '',
       colorClass2: 'progress-bar-success',
      progress3: 			50,
       progressLabel3: 			50,
       activeClass3: '',
       colorClass3: 'progress-bar-success'
     }
});

/* Funtion to increment the value of progress bar  param defines the parameter by which its value will be increased*/
      function increment(param){
          
          var progress = ractive.get('progress'+progressBar.selected);
          var progressLabel = ractive.get('progressLabel'+progressBar.selected);
          ractive.set('progressLabel'+progressBar.selected,progressLabel+param);
          progress+=param;
          if(progress>=100){
          ractive.set('progress'+progressBar.selected,100);
          ractive.set('colorClass'+progressBar.selected,'progress-bar-danger');
          }
		  
          else
              ractive.set('progress'+progressBar.selected,progress);
          
      }
      
/* Funtion to decrement the value of progress bar  param defines the parameter by which its value will be decreased*/

      function decrement(param){
          var progress = ractive.get('progress'+progressBar.selected);
          var progressLabel = ractive.get('progressLabel'+progressBar.selected);
      
          progressLabel-=param;

          if(progressLabel>100)
          ractive.set('progressLabel'+progressBar.selected,progressLabel);
          else if(progressLabel<=100&&progressLabel>=0) {
          ractive.set('progress'+progressBar.selected,progressLabel);
              ractive.set('progressLabel'+progressBar.selected,progressLabel);
              ractive.set('colorClass'+progressBar.selected,'progress-bar-success');
          }
          else if(progressLabel<=0){
              ractive.set('progress'+progressBar.selected,0);
              ractive.set('progressLabel'+progressBar.selected,0);
          
          }
      }

/* function to select active progress bar */

$( "select" )
  .change(function () {
    var str = "";
    progressBar.selected = $( "select option:selected" ).val();
    ractive.set('activeClass'+progressBar.selected,'active');
    $("select option").each(function(){

        //console.log($(this).val()!=selected);
        if($(this).val()!=progressBar.selected)
        {
            
                    ractive.set('activeClass'+$(this).val(),'');
        }
    });
    
    
      })
  .change();
