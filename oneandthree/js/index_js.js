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
// wrapTopButton_ 탑버튼 
const topBtn = document.getElementById('topBtn');
topBtn.onclick = () => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
}