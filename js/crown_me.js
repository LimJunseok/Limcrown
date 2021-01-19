
$(function(){
  $(window).scroll(function(){
    if($(document).scrollTop() >= 550 && $(document).scrollTop() <= $('#footer').offset().top - 800) { $('#quickmenu').fadeIn(200) 
    } else {$ ('#quickmenu').fadeOut(500)}
  })


    var quick_sta = 1;
    $('.map').click(function(){
    if(quick_sta ==1){
    $('#nav').animate({top:'-50px'});
    $('.nav_not').addClass('open');
    quick_sta = 2;
    }else {
    $('#top_button').animate({top:'-50px'});
    quick_sta = 1;
      }
    }) 
    var quick_sta = 1;
    $('.top_button').click(function(){
    if(quick_sta ==1){
    $('#nav').animate({top:'-800px'});
    $('.nav_not').removeClass('open')
    quick_sta = 2;
    }else {
    $('.nav_fist_box img:last-child').animate({top:'-50px'});
    quick_sta = 1;
      }
    }) 

    

    
    $('.slide2_box1').hover(function(){
     $('.basr_c').addClass('open');
     $('.t_f').addClass('open');
    },function(){
     $('.basr_c').removeClass('open');
     $('.t_f').removeClass('open');
  })
  $('.slide2_box1').hover(function(){
    $('.slide2_box1').addClass('open');
   },function(){
    $('.slide2_box1').removeClass('open');
 })

 $('.slide2_box2').hover(function(){
  $('.basr_c2').addClass('open');
  $('.t_f2').addClass('open');
 },function(){
  $('.basr_c2').removeClass('open');
  $('.t_f2').removeClass('open');
})
$('.slide2_box2').hover(function(){
 $('.slide2_box2').addClass('open');
},function(){
 $('.slide2_box2').removeClass('open');
})

$('.slide2_box3').hover(function(){
  $('.basr_c3').addClass('open');
  $('.t_f3').addClass('open');
 },function(){
  $('.basr_c3').removeClass('open');
  $('.t_f3').removeClass('open');
})
$('.slide2_box3').hover(function(){
 $('.slide2_box3').addClass('open');
},function(){
 $('.slide2_box3').removeClass('open');
})

$('.slide2_box3').hover(function(){
  $('.slide2_box3').addClass('open');
 },function(){
  $('.slide2_box3').removeClass('open');
 })
 


 $(".lazy").slick({
  lazyLoad: 'ondemand', // ondemand progressive anticipated
  infinite: true
});



})