var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 100,
    slidesPerGroup: 8,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var bigSwiper=new Swiper(".big-swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var castSwiper=new Swiper(".cast-swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// let isScrolled
//   window.onscroll = () => {
//     scroll()

//   }
//   let scroll=()=>{
//     isScrolled= window.pageYOffset === 0 ? false : true
//     // if(isScrolled){
//     //   document.querySelector(".header").classList.add("scrolled")
//     // }
//     // else{ document.querySelector(".header").classList.remove("scrolled")}
//   }

  window.onscroll = () => {
    let scroll = window.pageYOffset === 0 ? false : true
    if (scroll) {
      document.querySelector(".nav").classList.add("nav1")
    }
    else if(window.pageYOffset === 0){
      
        document.querySelector(".nav").classList.remove("nav1")
  
    }
      
    

    console.log(window.pageYOffset)

  }