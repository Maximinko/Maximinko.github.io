
const navMain = document.querySelector('.sign-form');
const up_menu = document.querySelector('.up-menu');

const menuBurger1 = document.querySelector('.settings-btn'); //для выезжания окошка при нажатии на кнопку "Настройки"
const navMain1 = document.querySelector('.switch');

menuBurger1.addEventListener('click', (Event) => {
    navMain1.classList.toggle('switch-active');
}); 

const menuBurger2 = document.querySelector('#string'); //для выезжания окошка при нажатии на кнопку "Настройки"

const string = document.querySelector('.string');




const sun = document.querySelector('.far.fa-sun');
const moon = document.querySelector('.far.fa-moon');
const changeTheme = document.querySelector('.switch');
const icon = document.querySelector('.sun-moon');
const body = document.body;
const container = document.querySelector('.main-container');
let link1 = document.querySelector('#a');
// console.log(link1.getAttribute('href'));
link1.setAttribute('href', '../style/light-theme.css')

changeTheme.addEventListener('click', (Event) =>{
   if(link1.getAttribute('href') == '../style/dark-theme.css'){
        link1.setAttribute('href', '../style/light-theme.css');
        changeTheme.classList.toggle('active');
   }
   else{
       link1.setAttribute('href', '../style/dark-theme.css');
       changeTheme.classList.toggle('active');
   }
});








window.addEventListener('scroll', (Event) =>{

    navMain1.classList.remove('switch-active');
    up_menu .classList.remove('none')
   
});


const Mystic = document.querySelector('#Mystic').classList;
document.querySelector('.divv').addEventListener('click', function() {
    Mystic.toggle('block');
    Mystic.toggle('none');
});
  





//const anime = document.querySelector('#anime').classList;
//const film = document.querySelector('#film').classList;
//const serial = document.querySelector('#serial').classList;
//document.querySelector('.nav-btn-anime').addEventListener('click', function() {
    
  //  film.toggle('block');
    //film.toggle('none');
    
    
  //});



  var a=Math.round(Math.random()*2)
  // это число должно совпадать с максимальным индексом таблицы ссылок
  
  link = new Array();
  link[0]="../content/Dororo/Dororo.html"
  link[1]="../content/Grand Blue/Grand Blue.html"
  link[2]="../content/Cowboy Bebop/Cowboy Bebop.html"
  // с максимальным индексом link[..] совпадает число, на которое умножаем вверху
  
  document.write ("<a href="+link[a]+">Ссылка</a>");
  


  var cats = ["Барсик", "Мурзик", "Рыжик", "Васька"];
var randomIndex = Math.floor(Math.random() * 4);

