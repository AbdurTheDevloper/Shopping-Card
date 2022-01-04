var firstPlus = document.getElementById('firstPlus');
firstPlus.addEventListener('click', function(){
var firstInput = document.getElementById('firstInput').value;
var conevrtInput = parseInt(firstInput) + 1;
document.getElementById('firstInput').value = conevrtInput;

var firstBalance = document.getElementById('firstBalance').innerText = conevrtInput * 60;

})

//  first minus btn 

var minusBtn = document.getElementById('firstMinus');
minusBtn.addEventListener('click', function(){
  var firstInput = document.getElementById('firstInput').value;
  var conevrtInput = parseInt(firstInput) - 1;
  document.getElementById('firstInput').value =conevrtInput;

  var firstBalance = document.getElementById('firstBalance').innerText = conevrtInput * 60;
 
})

// close btn 

var closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function(){
   var firstBalance = document.getElementById('firstBalance').innerText;
   var cnvertBalance = parseFloat(firstBalance);
   document.getElementById('firstBalance').innerText= cnvertBalance * 0;

   var firstInput = document.getElementById('firstInput').value;
   var convertInput = parseFloat(firstInput);
   document.getElementById('firstInput').value =convertInput * 0;
   
})


// second part start

var secondPlus =document.getElementById('secondPlus');
secondPlus.addEventListener('click', function(){
   var secondInput = document.getElementById('secondInput').value;
   var convertInput = parseInt(secondInput) + 1;
   document.getElementById('secondInput').value =convertInput;

   var secondBalance = document.getElementById('SecondTotalBalance').innerText = convertInput * 50;
   
})

var secondMinus = document.getElementById('secondMinus');
secondMinus.addEventListener('click', function(){
  var secondInput = document.getElementById('secondInput').value;
  var convertInput = parseInt(secondInput) - 1;
  document.getElementById('secondInput').value =convertInput;

  var SecondBalance = document.getElementById('SecondTotalBalance').innerText = convertInput * 50;
})

//second close btn 

var secondClose = document.getElementById('closeBtn2');
secondClose.addEventListener('click', function(){
   var secondBalance = document.getElementById('SecondTotalBalance').innerText;
   var convertBalance = parseFloat(secondBalance);
   document.getElementById('SecondTotalBalance').innerText =convertBalance * 0;

   var secondInput = document.getElementById('secondInput').value;
   var convertInput = parseInt(secondInput);
   document.getElementById('secondInput').value = convertInput * 0;
})