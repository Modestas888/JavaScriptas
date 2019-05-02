// Staciasis trikampis
const triangle = document.getElementById('triangle')
triangle.addEventListener('click', function(){
  let pyramide = ``;
  for(i=0;i<=10;i++)

  {
      for(j=0;j<=i;j++)
      {
          pyramide = pyramide + '*';

      }
      pyramide = pyramide + '<br/>';

  }
  document.getElementById('output').innerHTML = pyramide
});













// trikampis

const pyramid = document.getElementById('pyramid');
pyramid.addEventListener('click', function() {
let output = "";
  for( let i = 0; i < 10; i++)
  {
    for (let k = 0; k < (10-i); k++){
      output = output + "&nbsp;";
    }
    for (let j = 0; j < i; j++) {
      output = output + '*' + "&nbsp;";
    }
    output = output + ("</br>");
  }
  document.getElementById('output').innerHTML = output;
});


// reverse



const reverse = document.getElementById('reverse');
reverse.addEventListener('click', function() {
let output = "";


for( let i = 0; i < 10; i++)


{
for (let k = 0; k < i; k++){
    output = output + "&nbsp;";
  }

// atvirksciai proporcinga
  for (let j = 10; j > i; j--) {
    output =  output + '*' + "&nbsp;";
  }

  output = output + ("</br>");
}


  document.getElementById('output').innerHTML = output;
});


function newFunction() {
           document.getElementById("clear").reset();
        }
