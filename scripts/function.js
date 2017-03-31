function randomNumber(limitNumber)
{
  var limitNumber = parseInt(limitNumber);
  var Nb = Math.floor((Math.random() * limitNumber));
  return Nb;
}

function randomCoord(intervallBeginY0, intervallEndY1)
{
  var intervallBeginY0 = parseInt(intervallBeginY0);
  var intervallBeginY1 = parseInt(intervallBeginY1);
  var RandomCoord =((Math.random() * intervallEndY1) + intervallBeginY0);
  return RandomCoord;
}

function rightToLeft(id)
{
  var left = $(id).offset().left;

  $(id).css({left:left}).animate({"left":"0px"}, 3000, function(){
        $(id).remove();
  });
}
