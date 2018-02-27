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
      idCar = idCar + 1;
      $('#obstacle').append('<img id="'+idCar+'" src="img/yellowCar.ico" class="initPosition">');
      randomCoordY =  randomCoord(roadPositionTop, roadHeight);
      $('#'+idCar).css({'top': randomCoordY + 'px' });
      rightToLeft('#'+idCar);
  }, 1000);


  window.setInterval(function() {
      //IMPORTANT!!! Déclration des DIV et CLASS!!
      $.each($('.initPosition'), function() {
        if (collision($blackCar, $(this))) {
          alert("Game Over");
        }
      });
    }, 200);

});
