window.addEventListener("mousedown", setFlag);
window.addEventListener("mouseup", unsetFlag);

var colorList = ["Red", "Crimson", "Tomato", "Orange", "Yellow", "Gold", "Green",
"Lime", "Turquoise", "Blue", "Navy", "Indigo", "Violet"];

var backColorList = ["Black", "MidnightBlue", "DarkRed", "PapayaWhip", "Pink",
"LightCyan", "LightGray", "PaleGreen", "LightYellow", "White" ];

var mouseClicked = false;

var boxColor = "";
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
  if (boxColor != ""){
    event.currentTarget.style.backgroundColor = boxColor;
  } else{
    event.currentTarget.style.backgroundColor = randColor();
  }
}

function setColor(element){
  boxColor = element.id;
}

function changeColor(){
  console.log("got into changeColor");
  if (mouseClicked){
    event.currentTarget.style.backgroundColor = newColor();
  }
}

function setBoxColor(color){
  for (i = 0; i < 6000; i++){
    var newBox = document.getElementById(i);
    newBox.style.backgroundColor = color;
  }
}

function makeColorBoxes(n){
  for (i = 0; i < n; i++){
    document.body.appendChild(colorBox(i));
  }
}

function colorBox(i){
  var self = document.createElement("DIV");
  self.className = "color-block";
  self.id = i;
  self.style.backgroundColor = "black";
  self.addEventListener("mouseover", changeColor);
  return self;
}

function backColor(color){
  document.body.style.backgroundColor = color;
}

function fullBackColor(color){
  backColor(color);
  setBoxColor(color);
}

function whitebuttonfunction(){
  document.getElementById("black").style.backgroundColor = "black";
  document.getElementById("black").style.color = "white";
}

function colorButton(color){
  var self = document.createElement("BUTTON");
  self.className = "colorButton";
  self.id = color;
  self.style.backgroundColor = color;
  self.type = "button";
  self.innerHTML = color;
  self.addEventListener("click", function(){setColor(this);});
  return self;
}

function createColorButton(colorList){
  for (i = 0; i < colorList.length; i++){
    var newButton = colorButton(colorList[i]);
    newButton.style.marginTop = (12 + 4 * i) + "vh";
    document.body.appendChild(newButton);
  }
}

createColorButton(colorList);

function backColorButton(color){
  var self = document.createElement("BUTTON");
  self.className = "backgroundButton";
  self.id = color;
  self.style.backgroundColor = color;
  self.type = "button";
  self.innerHTML = color + " background";
  self.addEventListener("click", function(){fullBackColor(this.style.backgroundColor);});
  return self;
}

function createBackColorButton(backColorList){
  for (i = 0; i < backColorList.length; i++){
    var newBackgroundButton = backColorButton(backColorList[i]);
    newBackgroundButton.style.marginTop = (5 + 4 * i) + "vh";
    document.body.appendChild(newBackgroundButton);
  }
}

createBackColorButton(backColorList);

var numberOfBoxes = 6000;
makeColorBoxes(numberOfBoxes);
