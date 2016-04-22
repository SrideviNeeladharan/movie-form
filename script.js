


$(document).ready(function()
      {

          var arrayMovieList = [];
          var arrayYearList = [];
          var arrayDirList =[];
          

          $("#submitButton").click(function(event)
          {
              event.preventDefault();
            
            //generating the table          
              var tableVal1 = $("#movieName").val(); 
              arrayMovieList.push(tableVal1);  
            // $("#row").append('<td>' + tableVal1 + '</td>'); 
             
             var tableVal2 = $("#year").val();
             arrayYearList.push(tableVal2);
             //$("#row").append('<td>' + tableVal2 + '</td>');
             
             var tableVal3 = $("#director").val();
             arrayDirList.push(tableVal3);
            
             $("#table1").append('<tr><td>' + tableVal1 + '</td><td>' + tableVal2 + '</td><td>' + tableVal3 +'</td></tr>');
              $("#form").hide();
              $("#table").show();
  
          
          });

       $("#button1").click(function(event)
          {
             $("#table").hide();
             $("#form").show();
          });
   
     });

function resetForm()
{
   $("#form").reset();

}