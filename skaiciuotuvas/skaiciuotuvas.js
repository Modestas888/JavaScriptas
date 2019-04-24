function myFunction() {
             var x = document.getElementById("mybtn").value;
             document.getElementById("inputas1").innerHTML = x;
         }






const sum = document.getElementById('sum');
sum.addEventListener('click', function(event){
  let nb1 = Number(document.getElementById('inputas1').value);
  let nb2 = Number(document.getElementById('inputas2').value);
  document.getElementById('result').textContent = suma(nb1, nb2);
  });

let suma  = (firstNumber, secondNumber) => {
 const result = firstNumber + secondNumber;

 return result;
}
const skirt = document.getElementById('skirt');
skirt.addEventListener('click', function(event){
  let nb1 = Number(document.getElementById('inputas1').value);
  let nb2 = Number(document.getElementById('inputas2').value);
  document.getElementById('result').textContent = skirtumas(nb1, nb2);
  });

let skirtumas  = (firstNumber, secondNumber) => {
 const result = firstNumber - secondNumber;

 return result;
}
const dal = document.getElementById('dal');
dal.addEventListener('click', function(event){
  let nb1 = Number(document.getElementById('inputas1').value);
  let nb2 = Number(document.getElementById('inputas2').value);
  document.getElementById('result').textContent = dalyba(nb1, nb2);
  });

let dalyba  = (firstNumber, secondNumber) => {
 const result = firstNumber / secondNumber;

 return result;
}

const daug = document.getElementById('daug');
daug.addEventListener('click', function(event){
  let nb1 = Number(document.getElementById('inputas1').value);
  let nb2 = Number(document.getElementById('inputas2').value);
  document.getElementById('result').textContent = daugyba(nb1, nb2);
  });

let daugyba  = (firstNumber, secondNumber) => {
 const result = firstNumber * secondNumber;

 return result;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', function(event){
  document.getElementById('inputas1').value = "";
  document.getElementById('inputas2').value = "";
  document.getElementById('result').textContent = "";
});
