var app = app || {
	init: function(){
		app.slide_functions();
	},
	current_slide: 1,

	slide_to: function(num){
		if (Modernizr.csstransforms){
			var new_position = "-"+(num-1)*100+"%";
			//Slide using css transforms
			$(".js-slider")
				.css("transform","translateY("+new_position+")")
				.css("-webkit-transform","translateY("+new_position+")")
				.css("-moz-transform","translateY("+new_position+")")
				.css("-ms-transform","translateY("+new_position+")")
				.css("-o-transform","translateY("+new_position+")");

		} else {
			//Legacy support
			$(".js-slider").css("top",-(num-1)*100+"%");

		}
		app.current_slide = num;
	},

	slide_functions: function(){
		var total_slides = 8;

		//Slide down
		$(".down").on("click", function(){
			//Check our limit
			if (app.current_slide < total_slides){
				app.current_slide++;
				app.slide_to(app.current_slide);
				$(".js-title").css( "display", "block" );
			}
		});
	}
}
$(document).ready(function(){
	app.init();
});


const boxer = mainSlideContainer.querySelector(".js-people"),
			woman = mainSlideContainer.querySelector(".js-woman"),
			maxMove = mainSlideContainer.offsetWidth / 30,
			boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
			womanCenterX = woman.offsetLeft + (woman.offsetWidth / 2),
			boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
			womanCenterY = woman.offsetTop + (woman.offsetHeight / 2),
			fluidboxer = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {

  let panelRect = mainSlideContainer.getBoundingClientRect();
  return {
	  x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*mainSlideContainer.offsetWidth,
	  y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * mainSlideContainer.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {

  let mousePos = getMousePos(e.clientX, e.clientY),
  distX = mousePos.x - boxerCenterX,
  distY = mousePos.y - boxerCenterY,

      womandistX = mousePos.x - womanCenterX,
      womandistY = mousePos.y - womanCenterY;

  if (Math.abs(distX) < 800 && distY < 300 && fluidboxer.matches) {
  boxer.style.transform = "translate("+(-1*distX)/12+"px,"+(-1*distY)/12+"px)";
      woman.style.transform = "translate("+(-1*distX)/-12+"px,"+(-1*distY)/-12+"px)";
    mainSlideContainer.style.backgroundPosition = `calc(87% + ${distX/50}px) calc(87% + ${distY/50}px)`;
  }

})
