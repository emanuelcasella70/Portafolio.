let btnMenu = document.getElementById('btn');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
  mainNav.classList.toggle('mostrar');
});
const sub = document.getElementById("subb");

sub.addEventListener("submit", function(event) {
   event.preventDefault();
})