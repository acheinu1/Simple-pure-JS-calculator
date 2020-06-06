var box = document.getElementById('screen');

// add values to the screen
function toScreen(x) {
  box.value += x;
  if (x === 'c') {
    box.value = null;
  }
}

// the equal button
// var equalto = document.getElementById("equal");

function equal() {
  x = box.value;
  x = eval(x);
  box.value = x;
}

function power() {
  x = box.value;
  x = eval(x * x);
  box.value = x;
}

// function backspace() {
//   var display = box.value;
//   box.value = display.slice(0, display.length - 1);
// }

// substring or slice can work for backspace btn

function backspace() {
  var display = box.value;
  box.value = display.substring(0, display.length - 1);
}
