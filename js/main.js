  const tabItem=document.querySelectorAll('.tabs__button');
  const tabContent=document.querySelectorAll('.tabs-content-item');

  tabItem.forEach(function(el){
    el.addEventListener('click', open);
  })

  function open(evt){
    const tabTarget =evt.currentTarget;
    const button=tabTarget.dataset.button;

    tabItem.forEach(function(item){
      item.classList.remove('tabs__button--active');
    })

    tabTarget.classList.add('tabs__button--active');
    
    tabContent.forEach(function(item){
      item.classList.remove('tabs-content-item--active');
    })

    document.querySelector(`#${button}`).classList.add("tabs-content-item--active");
  }

  const burgerClose= document.querySelector('.burger__close');
  const menuList=document.querySelector('.header__nav__list');
  const burgerOpen=document.querySelector('.burger__menu');
  const menuClose=document.querySelector('.menu__close');

  burgerClose.addEventListener('click', ()=>{
    menuList.classList.remove('burger__menu__open');
    menuClose.classList.remove('menu__open');
  })

  burgerOpen.addEventListener('click', ()=>{
    menuList.classList.add('burger__menu__open');
    menuClose.classList.add('menu__open');
  })

  var swiper = new Swiper(".mySwiper", {
    effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay:{
        delay: 2500,
        disableOnInteraction:false,
      },
    });