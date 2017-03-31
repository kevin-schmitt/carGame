// GET image dimenssion
var img = new Image();
img.src = "img/yellowCar.ico";
const imgWeight = img.width;
const imgHeight = img.height;

//dimenssion of road
var roadHeight = 400;
$('#road').height(roadHeight);
var position = $( "#road" ).position();
var roadPositionTop = position.top;
var roadPositionbottom = roadPositionTop + roadHeight;

// Number car
var numberOfCar = 4;
