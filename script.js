function randInt (maximum) {
  var randFloat = Math.random();
  var scaledFloat = maximum * randFloat;
  var finalInt = Math.floor(scaledFloat);
  return finalInt;
}

function randColor(){
  var randRed = randInt() * 255;
  var randGreen = randInt() * 255;
  var randBlue = randInt() * 255;
  return "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
}

function changeColor(){
  event.currentTarget.style.backgroundColor = randColor();
}

for (i = 0; i < 2048; i++){
  var newBox = document.createElement("DIV");
  newBox.className = "color-block";
  newBox.id = i;
  newBox.style.backgroundColor = "black";
  newBox.addEventListener("onclick", changeColor;
  document.body.appendChild(newBox);
}
