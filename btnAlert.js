let btnoldh = document.getElementById("hold");let cds = document.getElementById("cds");let delate = document.getElementById("delate");let btnoldhh = document.getElementById("holdd");let cdss = document.getElementById("cdss");function quit(){btnoldh.classList.add("mm"); btnoldh.classList.remove("alert")  ;cds.classList.remove("opacity");}function addd(){btnoldh.classList.toggle("alert");  btnoldh.classList.remove("mm") ;cds.classList.toggle("opacity");}function add(){btnoldhh.classList.toggle("alert");  btnoldhh.classList.remove("mm") ;cdss.classList.toggle("opacity");}function quitt(){btnoldhh.classList.add("mm"); btnoldhh.classList.remove("alert")  ;cdss.classList.remove("opacity");}
let btnMenu = document.getElementById('btn');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
mainNav.classList.toggle('mostrar');
});
