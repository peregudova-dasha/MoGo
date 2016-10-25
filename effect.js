// MENU
 $("li").hover(
   function(){
      $(this).find(".underline").stop().animate({"width": "90%"})},
   function(){
       $(this).find(".underline").stop().animate({"width": "0px"})});

// MENU END
//BUTTON
$(".button").hover(
    function(){
      $(this).stop().animate({color: "#fce38a", borderColor:"#fce38a"})},
    function(){
      $(this).stop().animate({color: "#fff", borderColor:"fff"})
    }
)
//BUTTON end
//POINTS
$(".item").hover(
   function(){
      $(this).stop().animate({color: "#f38181", borderColor:"#f38181"}).find(".number").stop().animate({"color": "#f38181"})},
   function(){
       $(this).stop().animate({color: "#fff", borderColor:"#fff"}).find(".number").stop().animate({"color": "#fff"})});
//POINTS end

//SERVICE2
$(".service2 .title_panel").click(function(){
    $(this).next().slideToggle(400);
  
    $(this).find(".button").toggleClass("rotate")
});

//SERVICE2_end

//CITE
//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
//	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


//CITE END

