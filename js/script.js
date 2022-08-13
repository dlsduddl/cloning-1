console.clear();

$(".menu-bar > ul").mouseenter(function(){
  $(".nav-box").addClass("active");
});
$(".menu-bar").mouseleave(function(){
  $(".nav-box").removeClass("active");
});

