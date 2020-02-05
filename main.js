jQuery(document).ready(function($) {
    
   $.ajax({
       
       url: 'https://mysafeinfo.com/api/data?list=nbafinals&format=xml',
       type: 'GET',
       dataType: 'xml'
       
   })
    
    .done(function(result) {

      var allData = $(result).find('n');
       
      allData.each(function(index, el) {
           
        $('#wrapp').append('<p><a href="'+$(this).attr('url')+'">'+$(this).attr('WinningTeam')+'</a></p>')
    });
       
   })
    
});