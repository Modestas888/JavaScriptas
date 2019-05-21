var pushing = [];
document.getElementById("addend").addEventListener("click", myFunction);

function myFunction() {
  pushing.push(document.getElementById("input").value);
  document.getElementById("demo").innerHTML = pushing;
// a  dd end

}

  document.getElementById("addstart").addEventListener("click", unshiftinimas);
function unshiftinimas() {
  pushing.unshift(document.getElementById("input").value);
  document.getElementById("demo").innerHTML = pushing;
  // add start
}

document.getElementById("removefirst").addEventListener("click", removinimasFirst);
function removinimasFirst() {
    pushing.shift().value;
  document.getElementById("demo").innerHTML = pushing;
  // remove first
}
//
  document.getElementById("removelast").addEventListener("click", removinimaslast);
function removinimaslast() {
  pushing.pop().value;
  document.getElementById("demo").innerHTML = pushing;
}
// // remove last
//
document.getElementById("reverselist").addEventListener("click", reversinimas);
function reversinimas() {
  pushing.reverse();
  document.getElementById("demo").innerHTML = pushing;
}
// // reverse
document.getElementById("splices").addEventListener("click", splicinimas);
function splicinimas() {
  pushing.splice(1,2);
  document.getElementById("demo").innerHTML = pushing;
}
// // splice
document.getElementById("golast").addEventListener("click", golastinimas);
function golastinimas() {
  pushing.push(pushing.shift());
  document.getElementById("demo").innerHTML = pushing;
}
// // go last
document.getElementById("gofirst").addEventListener("click", gofirstinimas);
function gofirstinimas() {
  pushing.unshift(pushing.pop());
  document.getElementById("demo").innerHTML = pushing;
}
// go first

document.getElementById("sortaz").addEventListener("click", sortinimasaz);
function sortinimasaz() {
  pushing.sort((a, b) => a.localeCompare(b));
  document.getElementById("demo").innerHTML = pushing;
}
// sortinimas az
document.getElementById("sortza").addEventListener("click", sortasza);
function sortasza() {
  pushing.sort((b, a) => a.localeCompare(b));
  document.getElementById("demo").innerHTML = pushing;
}
// sortinimas za
