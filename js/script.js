// $(document).ready(function(){
//   $("header nav ul.gnb > li").hover(function(){
//     $("ul.sub").stop().slideDown();
//   },function(){
//     $("ul.sub").stop().slideUp();
//   });
 
 
//  }); //ready end

console.clear();

function SliderBox1__init() {
  let SliderBox1__i = 0;

  setInterval(function() {
    $('.slider-box-1').attr('data-index', ++SliderBox1__i % 3);
  }, 3000);
}

SliderBox1__init();