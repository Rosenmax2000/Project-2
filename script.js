window.addEventListener("mousedown", setFlag);
window.addEventListener("mouseup", unsetFlag);

var mouseClicked = false;
function setFlag(){
  mouseClicked = true;
}

function unsetFlag(){
  mouseClicked = false;
}

function randInt (maximum) {
  var randFloat = Math.random();
  var scaledFloat = maximum * randFloat;
  var finalInt = Math.floor(scaledFloat);
  return finalInt;
}

function randColor(){
  console.log("got into randColor");
  var randRed = randInt(255);
  var randGreen = randInt(255);
  var randBlue = randInt(255);
  return "rgb("+randRed+","+randGreen+","+randBlue+")";
}

function newColor(){
  if (red.clicked == true){
    event.currentTarget.style.backgroundColor = "red";
  } else if (green.clicked == true){
    event.currentTarget.style.backgroundColor = "green";
  } else if (blue.clicked == true){
    event.currentTarget.style.backgroundColor = "blue";
  } else{
    event.currentTarget.style.backgroundColor = randColor();
  }
}

function changeColor(){
  console.log("got into changeColor");
  if (mouseClicked){
    event.currentTarget.style.backgroundColor = newColor();
  }
}

for (i = 0; i < 3000; i++){
  var newBox = document.createElement("DIV");
  newBox.className = "color-block";
  newBox.id = i;
  newBox.style.backgroundColor = "black";
  newBox.addEventListener("mouseover", changeColor);
  document.body.appendChild(newBox);
}

function whitefunction(){
  document.body.style.backgroundColor = "white";
}
