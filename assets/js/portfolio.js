$(".fa-github").on('click', function(){
    window.location = "https://github.com/nlasusa";    
});

$("#circle4").on('click', function(){
    window.location = "https://github.com/nlasusa";    
});

$(".fa-linkedin").on('click', function(){
    window.location = "https://www.linkedin.com/in/nicole-lasusa-17a118a0/";    
});

$("#circle3").on('click', function(){
    window.location = "https://www.linkedin.com/in/nicole-lasusa-17a118a0/";    
});

$("#saying1").on('click', function(){
    window.location.href = "Portfolio.html";
});

$(".img5").on('click', function(){
    window.location.href = "Portfolio.html";
});

$("#friendf").on('click', function(){
    window.location.href = "https://lasusan-friend-finder.herokuapp.com/home.html";
});

$("#shopify").on('click', function(){
    window.location.href = "https://rocky-mesa-95810.herokuapp.com/";
});

$("#nutriprep").on('click', function(){
    window.location.href = "https://nlasusa.github.io/project1/";
});

$("#burger").on('click', function(){
    window.location.href = "https://fathomless-oasis-90250.herokuapp.com/";
});

$("#trivia").on('click', function(){
    window.location.href = "https://nlasusa.github.io/TriviaGame/";
});

$("#electric").on('click', function(){
    window.location.href = "https://nlasusa.github.io/lasusaelectric/";
});

$("#trains").on('click', function(){
    window.location.href = "https://nlasusa.github.io/train-schedule/";
});

$("#link4").on('click', function(){
    window.location.href = "https://fathomless-oasis-90250.herokuapp.com";
});

$("#link5").on('click', function(){
    window.location.href = "https://nlasusa.github.io/bamazon/";
});

$("#refresh-button1").on('click', function (){
    window.location.href = "index.html";
});

$("#refresh-button2").on('click', function (){
    window.location.href = "index.html";
});

$("#bio").on('click', function (){
    window.location.href = "aboutme.html";
});


$(".fa-phone").on('click', function (){
    window.location.href = "aboutme.html";
});

// portfolio 

$('.portfolio').each(function(index)
{
    $(this).attr('id', 'img' + (index + 1));
});
    
$('.portfolio').each(function(){
  $('#navi').append('<div class="circle"></div>');
});
  
$('.circle').each(function(index)
{
    $(this).attr('id', 'circle' + (index + 1));
});   
   
$('.portfolio').click(function(){
if($(this).hasClass('opened')){
    $(this).removeClass('opened');
    $(".portfolio").fadeIn("fast");
    $(this).find('.ombra').fadeOut();
    $("#navi div").removeClass("activenav");
}
else{
	var indexi = $("#maincontent .portfolio").index(this) + 1;
    $(this).addClass('opened'); 
    $(".portfolio").not(this).fadeOut("fast");
    $(this).find('.ombra').fadeIn();
    $("#circle" + indexi).addClass('activenav'); 
}
});	

//navi buttons
$("#navi div").click(function() {
if($(this).hasClass("activenav")){
	return false;
}
		
	$("#navi div").removeClass("activenav");
	$(".portfolio").removeClass('opened');
	$(".portfolio").show();
        $('.ombra').hide();
		
	var index = $("#navi div").index(this) + 1;
	$("#img" + index).addClass('opened'); 
    $(".portfolio").not("#img" + index).fadeOut("fast");
    $("#img" + index).find('.ombra').fadeIn();
        
    $(this).addClass("activenav");
});
