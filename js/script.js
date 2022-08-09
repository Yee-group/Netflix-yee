var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 0,
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
    slidesPerView: 8,
    spaceBetween: 0,
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
let isScrolled = false
  window.onscroll = () => {
   isScrolled= (window.pageYOffset === 0 ? false : true)
      return () => (
          window.onscroll
      )

  }

//   console.log(isScrolled)    const [isScrolled, setIsScrolled] = useState(false)
//   window.onscroll = () => {
//       setIsScrolled(window.pageYOffset === 0 ? false : true)
//       return () => (
//           window.onscroll = null
//       )

//   }
  console.log(isScrolled)