
      document.getElementById("resultReady").addEventListener("click", function() {
        const userInput = document.getElementById("userInput").value;
        const userNumber = parseFloat(userInput);

        const currrentResult = document.getElementById("currrentResult").innerText;
        //const currrentResultNumber = parseFloat(currrentResult);
        const totalResult = userNumber + currrentResult;
        

        document.getElementById("currrentResult").innerText = totalResult;
        })


        var numberWin = 0;
        var numberLost = 0;
    
    
     for (var i=1; i<=5; i++){
    
         for (var i=1; i<=5; i++){
    
                var guessNumber = parseInt(prompt("enter a number"));
            var randomNumber =Math.floor (Math.random()*10) + 1 ;
               if (guessNumber==randomNumber ){
                     console.log("you have won");
                     numberWin++;
                }
               else {
                     console.log("you lost.the number is" + randomNumber);
                 numberLost++
                 }
        }
     
    





        ------


        
     document.getElementById("resultReady").addEventListener("click", function() {
            
        var numberWin = 0;
        var numberLost = 0;
        for (var i=1; i<=5; i++){
        const userInput = document.getElementById("userInput").value;
        const userNumber = parseFloat(userInput);

        var randomNumber =Math.floor (Math.random()*5) + 1 ;
             if (userNumber==randomNumber){
                 console.log("you have won");
                     numberWin++;
             }
             else {
             console.log("you lost the number is:" + randomNumber);
                 numberLost++
             }
             }

        })
       



        
    <form id="myForm">
    First name: <input type="text" name="fname"><br>
    Last name: <input type="text" name="lname"><br><br>
    <input type="button" onclick="myFunction()" value="Reset form">
  </form>
  
  
  function myFunction() {
  document.getElementById("main").reset();
  }
  





  //store

      

**//end</br>



//RESULT BUTTON FUNCTION
document.getElementById("resultReady").addEventListener("click", function() {      
            
            // var numberWin = 0;
             //var numberLost = 0;
         for (var i=1; i<=1; i++){
         var userInputData = document.getElementById("userInput").value;
          var userNumber = parseInt(userInputData);
          //document.getElementById("userInput").value = "";
         
         var randomNumber =Math.floor (Math.random()*3) + 1 ;
              if (userNumber==randomNumber){
                  let currrentResult = document.getElementById("currrentResult").innerText;
                 let totalResult = randomNumber + currrentResult;
                 // console.log("win");
                  document.getElementById("currrentResult").innerText = "বাহ ! -আপনি সঠিক সংখ্যাটি দিয়েছেন-0" + totalResult;
                  document.getElementById("currrentResultFail").innerText ="";
                  document.getElementById("userInput").value = "";
                           numberWin++;   
              }
              
              else {
                 // console.log("lost" + randomNumber);
                  document.getElementById("currrentResultFail").innerText = "দুঃখিত-সঠিক সংখ্যাটি হচ্ছে-0" + randomNumber;
                  document.getElementById("currrentResult").innerText = "";
                  document.getElementById("userInput").value = "";
                 numberLost++;  
                   }     
                 }     
               
            })
            //result button end