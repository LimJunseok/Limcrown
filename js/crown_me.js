







$(function(){
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
    },function(){
     $('.basr_c').removeClass('open');
  })

  $('.slide2_box1').hover(function(){
    $('.slide2_box1').addClass('open');
   },function(){
    $('.slide2_box1').removeClass('open');
 })
})