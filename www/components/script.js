// This is a JavaScript file

  var instance = M.Carousel.init({
    fullWidth: false,
    indicators: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: false,
    indicators: true
  });

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });



$(document).ready(function(){
    $('.carousel').carousel();
  });





function editImage() {
              
  var escala  = $("#escala").val();
  var blur 	  = $("#blur").val();
  var opaci   = $("#opaci").val();
  var saturacao = $("#saturacao").val();

  var filter = 'grayscale(' + escala+ '%) blur(' + blur + 'px) opacity(' + opaci + '%) saturate(' + saturacao + '%)';

$("#imagem").css("filter", filter);

}
$("input[type=range]").change(editImage).mousemove(editImage);