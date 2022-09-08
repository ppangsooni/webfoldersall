

// wrapTopButton_ 탑버튼 
const topBtn = document.getElementById('topBtn');
topBtn.onclick = () => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
}