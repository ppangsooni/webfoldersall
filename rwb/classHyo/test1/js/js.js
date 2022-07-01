function hideDiv (){
    document.getElementById("menu").style.display="block";
    document.getElementById("smokyWrap").style.display="none";

  }
  self.setTimeout("hideDiv()",6000); 
  

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".contArt_imgWrap>a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}


// var mapDisplay = true;
// function mapDisplay(){
// 	var con = document.getElementById("mapB");
// 	if(con.style.display=='none'){
// 		con.style.display = 'block';
// 	}else{
// 		con.style.display = 'none';
// 	}
// }

var mapBtn = document.querySelectorAll('.mapBtn');
var mapBtnPopClose = document.querySelectorAll('#mapBtnClo');
var mapBtnID;

// 지도 팝업 열기
for(var i = 0; i < mapBtn.length; i++){
  mapBtn[i].addEventListener('click', function(){
    mapBtnID = this.getAttribute('href');
    document.querySelector(mapBtnID).style.display = 'block';
  });
}




      let openMenu = document.querySelector('.menu_icon');
      let slide = document.querySelector('.menu_list');
      let close = document.querySelector('.menu_list_icon');
      openMenu.addEventListener('click', function() {
        console.log("11");
        if (!slide.clientWidth) {
          document.documentElement.style.overflow = "hidden";
          document.body.style.overflow = "hidden";
          slide.style.width = "60%";
          slide.style.visibility = 'visible';
        } else {
          hideMenu();
        }
        // slide.style.left = "0";
      });
      close.addEventListener('click', function() {
         hideMenu();
      });
      function hideMenu() {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        slide.style.width = "0%";
        slide.style.visibility = 'hidden';
      }
      