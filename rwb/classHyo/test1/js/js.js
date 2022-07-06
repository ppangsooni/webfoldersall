function hideDiv (){
    document.getElementById("menu").style.display="block";
    document.getElementById("smokyWrap").style.display="none";

  }
  self.setTimeout("hideDiv()",6000); 
  

let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".contArt_imgWrap>a"); //메뉴 링크
// //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}


//----------------------- map
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



let openMenu = document.querySelector('.menu_icon'),
    slide = document.querySelector('.menu_list'),
    closeMenu = document.querySelector('.menu_list_icon');

openMenu.addEventListener('click', function() {
    console.log(window.innerWidth);
    console.log(document.body.offsetWidth < 650);

    if (!slide.clientWidth) {
        seeMenu();

        if (document.body.offsetWidth <= 1040) {
            slide.style.width = '100%';
            slide.style.top = 0;
        } else {
            slide.style.width = '60%';
        }        
    }  else {
        hideMenu();
    }
});

closeMenu.addEventListener('click', function() {
    hideMenu();
});

function seeMenu() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    slide.style.opacity = '1';
    slide.style.visibility = 'visible';
}

function hideMenu() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    slide.style.width = '0';
    slide.style.opacity = '0';
    slide.style.visibility = 'hidden';
}
//-----------------------Event_popup1 
var popup1_Opbt = document.getElementById('Event_popup1_Open');
var popup1 = document.getElementById('Event_popup1');
var popup1_Clbt = document.getElementById('Event_popup1_Close');

popup1_Opbt.addEventListener('click', function(){
    popup1.style.display="block";
});
popup1_Clbt.addEventListener('click', function(){
    popup1.style.display="none";
});

//-----------------------Event_popup2
var popup2_Opbt = document.getElementById('Event_popup2_Open');
var popup2 = document.getElementById('Event_popup2');
var popup2_Clbt = document.getElementById('Event_popup2_Close');

popup2_Opbt.addEventListener('click', function(){
    popup2.style.display="block";
});
popup2_Clbt.addEventListener('click', function(){
    popup2.style.display="none";
});