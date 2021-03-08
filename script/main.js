var mobileMenu =document.querySelector('#burger-button');
var menuBox =document.querySelector('#mobile-menu-box');
var body =document.querySelector('body');
var overlay =document.querySelector('#overlay');
var kobinetBox =document.querySelector('#kobinet-box');
var knopkaKobinet =document.querySelector('#kabinet');
var boxCloss =document.querySelector('#box-closs');

mobileMenu.addEventListener('click',function(e){
	e.preventDefault();
	menuBox.classList.toggle('oppen'); 
	overlay.classList.toggle('over-oppen');
	body.classList.toggle('no_scrol')
})



var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
    spaceBetween: 32,

    pagination: {
     el: '.swiper-pagination',
     clickable: true,
    },
  })


knopkaKobinet.addEventListener('click',function(e){
	e.preventDefault();
	kobinetBox.classList.toggle('kobinet-oppen');
	body.classList.toggle('no_scrol')
})

boxCloss.addEventListener('click',function(e){
	e.preventDefault();

	kobinetBox.classList.remove('kobinet-oppen');
	body.classList.remove('no_scrol')
})


