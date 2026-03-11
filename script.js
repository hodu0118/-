// 부드러운 스크롤
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click', function(e){
e.preventDefault()
document.querySelector(this.getAttribute('href'))
.scrollIntoView({behavior:'smooth'})
})
})
