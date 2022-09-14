
// -----width=690(모바일)경우 메뉴변화-----
let openMenu = document.querySelector('.menu_btn'),
    slide = document.querySelector('nav'),
    closeMenu = document.querySelector('.menuClose'),
    menulistClick = document.querySelectorAll('.menuberList_li>a');
    menulistOpen = document.querySelectorAll('.menuberList_liCh');

console.log (menulistClick);

openMenu.addEventListener('click', function(){
    seeMenu();
});
closeMenu.addEventListener('click', function(){
    hideMenu();
});
function seeMenu() {
    slide.style.display="block";
    slide.style.position="absolute";
    slide.style.width="70%";
}
function hideMenu() {
    slide.style.display="none";
}

for(i=0; i<menulistClick.length; i++) {
    console.log(menulistClick[i]);
    menulistClick[i].addEventListener('click', function(){ 
        if (this.nextSibling.nextSibling.style.display == "none") {
            console.log('1:', this);
            console.log(this.nextSibling.nextSibling) ;
            this.nextSibling.nextSibling.style.display = "block";
        } else {
            this.nextSibling.nextSibling.style.display = "none";
        };
    });
}


// -----main_Imgbox_ 이미지 슬라이드쇼 -----
let main_banner_Img= [
    "https://i.ibb.co/QDh4wMc/main-PC-1920x440-20201006040046969.jpg",
    "https://i.ibb.co/fXxC4j1/main-PC-1920x440-20220722110659575.jpg",
    "https://i.ibb.co/wzG57vQ/main-PC-1920x440-20220829043050726.jpg",
    "https://i.ibb.co/bWHd72n/main-PC-1920x440-20220830013330280.jpg"
]    
let cnt = 0;
function chage_banner_Img() {                       
    document.querySelector('.main_banner_Img').setAttribute('src', main_banner_Img[cnt]);
    // document.querySelector('.main_banner_Imgbox>a').setAttribute('href', 이미지 자세히보기 주소);
    console.log(cnt);
    cnt = cnt + 1;        
    if( cnt == 4) {
        cnt = 0;
    };        
}
setInterval(chage_banner_Img, 2000);

// -----main_menulistWrap Swiper -----
let menulistCotroll = document.querySelectorAll('.main_ml_topRight>ul>a>li'),
        menulistTab_Cl = document.getElementsByClassName('main_ml_bottom_cl')[0],
        menulistTab_fl = document.getElementsByClassName('main_ml_bottom_fl')[0],
        menulistTab_pm = document.getElementsByClassName('main_ml_bottom_pm')[0],
        menulistTab_mo = document.getElementsByClassName('main_ml_bottom_mo')[0];

menulistCotroll[0].addEventListener('click', () => {
    menulistTab_Cl.style.display = 'block';
    menulistTab_fl.style.display = 'none';
    menulistTab_pm.style.display = 'none';
    menulistTab_mo.style.display = 'none';
});

menulistCotroll[1].addEventListener('click', () => {
    menulistTab_fl.style.display = 'block';
    menulistTab_Cl.style.display = 'none';
    menulistTab_pm.style.display = 'none';
    menulistTab_mo.style.display = 'none';
});

menulistCotroll[2].addEventListener('click', () => {
    menulistTab_pm.style.display = 'block';
    menulistTab_Cl.style.display = 'none';
    menulistTab_fl.style.display = 'none';
    menulistTab_mo.style.display = 'none';

});

menulistCotroll[3].addEventListener('click', () => {
    menulistTab_mo.style.display = 'block';
    menulistTab_Cl.style.display = 'none';
    menulistTab_fl.style.display = 'none';
    menulistTab_pm.style.display = 'none';
});

/*Section 공통> Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
// ----wrapTopButton_ 탑버튼 -----
const topBtn = document.getElementById('topBtn');
topBtn.onclick = () => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
}