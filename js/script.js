console.clear();
// 메뉴바 호버시 통쨰로 내려오게 !
$(".menu-bar > ul").mouseenter(function(){
  $(".nav-box").addClass("active");
});
$(".menu-bar").mouseleave(function(){
  $(".nav-box").removeClass("active");
});

// section3 글씨 호버시 이미지 변경

$(".section-3-content > div").mouseenter(function(){
  let $this = $(this);
  let indexNum = $(this).index();
  // .index() : 선택한 요소의 인덱스 번호(내가 몇 번째 자식인지!)를 가져온다.
  // indexNum이라는 변수에 내가 마우스를 올린 요소의 인덱스 번호를 저장한다.
  
  $(".section-3-2-img > a").removeClass("active3");
  // .img-box의 자식 div에 모든 active클래스를 제거한다.
  
  $(".section-3-2-img > a").eq(indexNum).addClass("active3");
  // $("선택자").eq(인덱스 번호) : 선택한 요소의 인덱스 번호에 해당하는 요소를 가져온다.
  // 예시) $("div").eq(1) => div인데 첫째 div를 선택!
  // 내가 마우스를 올린 요소의 인덱스 번호와 같은 인덱스 번호를 가진 요소에 active를 클래스를 추가한다.
  // => 첫째에 마우스를 올리면 같은 첫째를 불러온다!
  
});