$(document).ready(function() {
  var $blackCar = $('#blackCar');
  var arrayListOfCar;
  var NbCar;
  var randomCoordY;
  var idCar = 0;
  var Game = new FunctionsGame();

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



  let carAnimation = setInterval(function() {
      idCar = idCar + 1;
      $('#obstacle').append('<img id="'+idCar+'" src="img/yellowCar.ico" class="initPosition">');
      randomCoordY =  Game.randomCoord(roadPositionTop, roadHeight);
      $('#'+idCar).css({'top': randomCoordY + 'px' });
      Game.rightToLeft('#'+idCar);
  }, 1000);


   let  main = window.setInterval(function() {
      $.each($('.initPosition'), function() {
        if (Game.collision($blackCar, $(this))) {
		  stop();
          alert("Game Over");
        }
      });
    }, 200);

	function stop(){
		 clearInterval(main);
		 clearInterval(carAnimation);
	}

});
