$(document).ready(function() {
  var $blackCar = $('#blackCar');
  var arrayListOfCar;
  var NbCar;
  var randomCoordY;
  var idCar = 0;

// keyboard action for car
  $(document).keydown(function(e) {
      switch (e.which) {
      case 38:
          $blackCar.stop().animate({
              top: '-=40'
          }); //up arrow key
          break;
      case 40:
          $blackCar.stop().animate({
              top: '+=40'
          }); //bottom arrow key
          break;
      }
  });

  setInterval(function() {
      $('#obstacle').html('<img id="'+idCar+'" src="img/yellowCar.ico" class="initPosition">');
      var id = '#'+idCar;
      rightToLeft(id);
  }, 3000);




});
