$(document).ready(function(){
	app.init();
});

var app = app || {
	init: function(){
		app.slide_functions();
	},
	current_slide: 1,

	slide_to: function(num){
		if (Modernizr.csstransforms){
			var new_position = "-"+(num-1)*100+"%";

			$(".js-slider")
				.css("transform","translateY("+new_position+")")
				.css("-webkit-transform","translateY("+new_position+")")
				.css("-moz-transform","translateY("+new_position+")")
				.css("-ms-transform","translateY("+new_position+")")
				.css("-o-transform","translateY("+new_position+")");
			} else {

				$(".js-slider").css("top",-(num-1)*100+"%");
			}
		app.current_slide = num;
	},

	slide_functions: function(){
		var total_slides = 9;
		var body = $("#m-slides");
		$(".m-down").on("click", function(){

			if (app.current_slide < total_slides){

				app.current_slide++;
				app.slide_to(app.current_slide);
				$(".js-title").css({"opacity":"1", "width":"auto" });
				$(".js-logo-brand").css("max-width","30vw" );
				$(".js-logo").css("max-width","22vw" );
			}
		});

		// Try again
		$(".js-repeat").on("click", function(){
				app.slide_to(app.current_slide = 1);
				$(".js-title").css( "opacity", "0" );
		});
	}
};

$(".js-result-btn").click(function () {
	$('.js-wrapper').addClass('m-result-wrapper');
	var chk1 = $('#m-form').find('.m-answer1:checked').length;
	var chk2 = $('#m-form').find('.m-answer2:checked').length;
	var chk3 = $('#m-form').find('.m-answer3:checked').length;
	var chk4 = $('#m-form').find('.m-answer4:checked').length;

	if(chk1 > chk2 && chk1 > chk3 && chk1 > chk4) {
		$(".js-result").load("results/result1.html");
		$(".js-social").attr("data-url", "http://pms.woman.ru/share/1/");
	} else if (chk2 > chk1 && chk2 > chk3 && chk2 > chk4) {
		$(".js-result").load("results/result2.html");
		$(".js-social").attr("data-url", "http://pms.woman.ru/share/2/");
	} else if (chk3 > chk1 && chk3 > chk2 && chk3 > chk4) {
		$(".js-result").load("results/result3.html");
		$(".js-social").attr("data-url", "http://pms.woman.ru/share/3/");
	} else {
		$(".js-result").load("results/result4.html");
		$(".js-social").attr("data-url", "http://pms.woman.ru/share/4/");
	}
});

const people = introContainer.querySelector(".js-people"),
			woman = introContainer.querySelector(".js-woman"),
			maxMove = introContainer.offsetWidth / 30,
			peopleCenterX = people.offsetLeft + (people.offsetWidth / 2),
			womanCenterX = woman.offsetLeft + (woman.offsetWidth / 2),
			peopleCenterY = people.offsetTop + (people.offsetHeight / 2),
			womanCenterY = woman.offsetTop + (woman.offsetHeight / 2),
			fluidpeople = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {

  let panelRect = introContainer.getBoundingClientRect();
  return {
	  x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*introContainer.offsetWidth,
	  y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * introContainer.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {

  let mousePos = getMousePos(e.clientX, e.clientY),
  distX = mousePos.x - peopleCenterX,
  distY = mousePos.y - peopleCenterY,

      womandistX = mousePos.x - womanCenterX,
      womandistY = mousePos.y - womanCenterY;

  if (Math.abs(distX) < 800 && distY < 300 && fluidpeople.matches) {
		people.style.transform = "translate("+(-1*distX)/12+"px,"+(-1*distY)/12+"px)";
		woman.style.transform = "translate("+(-1*distX)/-12+"px,"+(-1*distY)/-12+"px)";
		introContainer.style.backgroundPosition = `calc(87% + ${distX/50}px) calc(87% + ${distY/50}px)`;
  }

});
