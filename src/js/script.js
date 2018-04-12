$(document).ready(function(){
	app.init();
});


// slider
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


		$(".js-start").on("click", function() {
			app.current_slide++;
			app.slide_to(app.current_slide);
			$(".js-title").css({"opacity":"1", "width":"auto" });
			$(".js-logo-brand").css("max-width","30vw" );
			$(".js-logo").css("max-width","22vw" );
		});

		// validate
		$(".js-next").on("click", function() {

			var clikedForm = $(this).parent('.js-answers');
			var answers = clikedForm.find('.m-answer:checked');

	    if ( answers.length !== 0 ) {
				app.current_slide++;
				app.slide_to(app.current_slide);
	    }
			else {
				console.log('choose answer !');
	      return false;
			}
		});
	}
};


// results
$(".js-result-btn").click(function () {
	$('.js-wrapper').addClass('m-result-wrapper');
	var chk1 = $('#m-form').find('.m-answer1:checked').length;
	var chk2 = $('#m-form').find('.m-answer2:checked').length;
	var chk3 = $('#m-form').find('.m-answer3:checked').length;
	var chk4 = $('#m-form').find('.m-answer4:checked').length;

	if(chk1 > chk2 && chk1 > chk3 && chk1 > chk4) {
		$(".js-result").load("results/result1.html");
	} else if (chk2 > chk1 && chk2 > chk3 && chk2 > chk4) {
		$(".js-result").load("results/result2.html");
	} else if (chk3 > chk1 && chk3 > chk2 && chk3 > chk4) {
		$(".js-result").load("results/result3.html");
	} else {
		$(".js-result").load("results/result4.html");
	}
});

// front page

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
		// introContainer.style.backgroundPosition = `calc(87% + ${distX/50}px) calc(87% + ${distY/50}px)`;
  }
});


// question pics
function changePic1(box){
	var pics = new Array(4)
	pics[1] = "img/quest/1/1.jpg";
	pics[2] = "img/quest/1/3.jpg";
	pics[3] = "img/quest/1/2.jpg";
	pics[4] = "img/quest/1/4.jpg";
	document.querySelector('.changepic1').src = pics[parseInt(box.value)];
}
function changePic2(box){
	var pics = new Array(4)
	pics[5] = "img/quest/2/5.png";
	pics[6] = "img/quest/2/6.png";
	pics[7] = "img/quest/2/7.png";
	pics[8] = "img/quest/2/8.png";
	document.querySelector('.changepic2').src = pics[parseInt(box.value)];
}
function changePic3(box){
	var pics = new Array(4)
	pics[9] = "img/quest/3/9.jpg";
	pics[10] = "img/quest/3/10.jpg";
	pics[11] = "img/quest/3/11.jpg";
	pics[12] = "img/quest/3/12.jpg";
	document.querySelector('.changepic3').src = pics[parseInt(box.value)];
}
function changePic4(box){
	var pics = new Array(4)
	pics[13] = "img/quest/4/13.png";
	pics[14] = "img/quest/4/14.png";
	pics[15] = "img/quest/4/15.jpg";
	pics[16] = "img/quest/4/16.png";
	document.querySelector('.changepic4').src = pics[parseInt(box.value)];
}
function changePic5(box){
	var pics = new Array(4)
	pics[17] = "img/quest/5/17.png";
	pics[18] = "img/quest/5/18.jpg";
	pics[19] = "img/quest/5/19.png";
	pics[20] = "img/quest/5/20.png";
	document.querySelector('.changepic5').src = pics[parseInt(box.value)];
}
function changePic6(box){
	var pics = new Array(4)
	pics[21] = "img/quest/6/21.jpg";
	pics[22] = "img/quest/6/22.jpg";
	pics[23] = "img/quest/6/23.jpg";
	pics[24] = "img/quest/6/24.jpg";
	document.querySelector('.changepic6').src = pics[parseInt(box.value)];
}
function changePic7(box){
	var pics = new Array(4)
	pics[25] = "img/quest/7/25.png";
	pics[26] = "img/quest/7/26.png";
	pics[27] = "img/quest/7/27.jpg";
	pics[28] = "img/quest/7/28.png";
	document.querySelector('.changepic7').src = pics[parseInt(box.value)];
}
