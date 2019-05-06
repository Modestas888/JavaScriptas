var pushing = [];
document.getElementById("addend").addEventListener("click", myFunction);

function myFunction() {
  pushing.push(document.getElementById("input").value);
  document.getElementById("demo").innerHTML = pushing;
// add end

}

document.getElementById("addstart").addEventListener("click", Function);
function Function() {
  pushing.unshift(document.getElementById("input").value);
  document.getElementById("demo").innerHTML = pushing;
  // add start
}
document.getElementById("removefirst").addEventListener("click", mFunction);
function mFunction() {
    pushing.shift().value;
  document.getElementById("demo").innerHTML = pushing;
  // remove first
}
//
  document.getElementById("removelast").addEventListener("click", yFunction);
function yFunction() {
  pushing.pop().value;
  document.getElementById("demo").innerHTML = pushing;
}
// // remove last
//
document.getElementById("reverselist").addEventListener("click", myFunctio);
function myFunctio() {
  pushing.reverse();
  document.getElementById("demo").innerHTML = pushing;
}
// // reverse
document.getElementById("splices").addEventListener("click", myFunctio);
function myFunctio() {
  pushing.splice(1,2);
  document.getElementById("demo").innerHTML = pushing;
}
// // splice
document.getElementById("golast").addEventListener("click", myFunctio);
function myFunctio() {
  pushing.push(pushing.shift());
  document.getElementById("demo").innerHTML = pushing;
}
// // go last
document.getElementById("gofirst").addEventListener("click", myFunctio);
function myFunctio() {
  pushing.unshift(pushing.pop());
  document.getElementById("demo").innerHTML = pushing;
}
// go first
document.getElementById("gofirst").addEventListener("click", myFunctio);
function myFunctio() {
  pushing.unshift(pushing.pop());
  document.getElementById("demo").innerHTML = pushing;
}
// document.getElementById("sortaz").addEventListener("click", myFunctio);
// function myFunctio() {
//   pushing.sort();
//   document.getElementById("demo").innerHTML = pushing;
// }
document.getElementById("sortza").addEventListener("click", myFunctio);
function myFunctio() {
  pushing.sort().reverse();
  document.getElementById("demo").innerHTML = pushing;
}
