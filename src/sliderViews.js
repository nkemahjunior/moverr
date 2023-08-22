import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

class sliderView{

    _heroSlide(){

        const heroSlider = function(){
         
            const swiper = new Swiper('.heroswiper', {
                                
              // Optional parameters
              direction: 'horizontal',
              loop: true,
              allowTouchMove: true,
              
            
              // If we need pagination
              pagination: {
              el: '.heropagination',
              },
              
              // Navigation arrows
              navigation: {
              nextEl: '.heroNext',
              prevEl: '.heroPrev',
              },
              
              // autoplay: {
              //     delay : 3000,
              //     disableOnInteraction : false,
              // },
              
              effect: 'fade',
              fadeEffect: {
                crossFade: true
              },
              
              });
             
        }

        // heroSlider.on('click',function(){
        //     console.log("working")
        // })

        heroSlider();


    }

    _releasedSlide(){

        const sliderRelease = function(){
            const swiper = new Swiper(".mySwiper", {
          
              slidesPerView: 6,
              spaceBetween: 10,
              allowTouchMove: true,
              breakpoints: {
                // when window width is >= 320px
                200: {
                  slidesPerView: 1.3,
                  spaceBetween: 10
                },
          
                250: {
                  slidesPerView: 1.5,
                  spaceBetween: 10
                },
                300: {
                  slidesPerView: 1.7,
                  spaceBetween: 10
                },
                460: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                600: {
                  slidesPerView: 3.2,
                  spaceBetween: 10
                },
                740: {
                  slidesPerView: 4.2,
                  spaceBetween: 10
                },
                1060:{
                 slidesPerView: 5,
                  spaceBetween: 10,
                },
                1250:{
                  slidesPerView: 6,
                   spaceBetween: 10,
                 }
                 
              },
          
              direction: 'horizontal',
              loop: true,
          
              // pagination: {
              //   el: ".released-pag",
              //   clickable: true,
              // },
          
              navigation: {
                nextEl: '.released-Next',
                prevEl: '.released-Prev',
                },
            });
        }
        sliderRelease();
    }
  
    _popularSlide(){

        const popularSlider = function(){
            const swiper = new Swiper(".popularswiper", {
          
              slidesPerView:4 ,
              spaceBetween: 20,
              allowTouchMove: true,
          
              direction: 'horizontal',
              loop: true,
              breakpoints: {
                // when window width is >= 320px
                200: {
                  slidesPerView: 1.2,
                  spaceBetween: 5
                },
                300: {
                  slidesPerView: 1.2,
                  spaceBetween: 5
                },
                460: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                600: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                740: {
                  slidesPerView: 3.2,
                  spaceBetween: 10
                },
                1060:{
                 slidesPerView: 4,
                  spaceBetween: 10,
                },
                1250:{
                  slidesPerView: 4,
                   spaceBetween: 10,
                 }
                 
              },
          
              // pagination: {
              //   el: ".released-pag",
              //   clickable: true,
              // },
          
              navigation: {
                nextEl: '.popular-Next',
                prevEl: '.popular-Prev',
                },
            });
        }

        popularSlider();
    }

    // _exploreSlide(){

    //   const exploreSlider = function(){
    //       const swiper = new Swiper(".exploreswiper", {


    //         slidesPerView:2.5,
    //         spaceBetween: 20,
    //         allowTouchMove: true,
        
    //         direction: 'horizontal',
    //         loop: true,
        
        
    //         navigation: {
    //           nextEl: '.explore-Next',
    //           prevEl: '.explore-Prev',
    //           },
    //       });

    //       // swiper.on('activeIndexChange ',function(){
    //       //     console.log( swiper.realIndex)
    //       // })
    //   }
    //   exploreSlider();
        

    // }

    _movieSlide(){

        const movieSlider = function(){
            const swiper = new Swiper(".moviesswiper", {
          
              slidesPerView:6,
              spaceBetween: 10,
              allowTouchMove: true,
          
              breakpoints: {
                // when window width is >= 320px
                200: {
                  slidesPerView: 1.3,
                  spaceBetween: 10
                },
                250: {
                  slidesPerView: 1.5,
                  spaceBetween: 10
                },
                300: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                460: {
                  slidesPerView: 3.2,
                  spaceBetween: 10
                },
                600: {
                  slidesPerView: 3.5,
                  spaceBetween: 10
                },
                740: {
                  slidesPerView: 4.2,
                  spaceBetween: 10
                },
                1060:{
                 slidesPerView: 5,
                  spaceBetween: 10,
                },
                1250:{
                  slidesPerView: 6,
                   spaceBetween: 10,
                 }
                 
              },
          
              direction: 'horizontal',
              loop: true,
          
              // pagination: {
              //   el: ".released-pag",
              //   clickable: true,
              // },
          
              navigation: {
                nextEl: '.movies-Next',
                prevEl: '.movies-Prev',
                },
            });
        }

        movieSlider();
    }

    _seriesSlide(){

        const seriesSlider = function(){
            const swiper = new Swiper(".seriesswiper", {
          
              slidesPerView:6,
              spaceBetween: 10,
              allowTouchMove: true,
          
              breakpoints: {
                // when window width is >= 320px
                200: {
                  slidesPerView: 1.3,
                  spaceBetween: 10
                },
                250: {
                  slidesPerView: 1.5,
                  spaceBetween: 10
                },
                300: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                460: {
                  slidesPerView: 3.2,
                  spaceBetween: 10
                },
                600: {
                  slidesPerView: 3.5,
                  spaceBetween: 10
                },
                740: {
                  slidesPerView: 4.2,
                  spaceBetween: 10
                },
                1060:{
                 slidesPerView: 5,
                  spaceBetween: 10,
                },
                1250:{
                  slidesPerView: 6,
                   spaceBetween: 10,
                 }
                 
              },
          
              direction: 'horizontal',
              loop: true,
          
              // pagination: {
              //   el: ".released-pag",
              //   clickable: true,
              // },
          
              navigation: {
                nextEl: '.series-Next',
                prevEl: '.series-Prev',
                },
            });
        }

        seriesSlider();
    }

    _movieAwardsSlide(){

        const movieAwardsSlider = function(){
            const swiper = new Swiper('.movie-awards-swiper', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
              slidesPerView:1.1,
              spaceBetween: 10,
              allowTouchMove: true,
          
              breakpoints: {
                // when window width is >= 320px
                200: {
                  slidesPerView: 1.1,
                  spaceBetween: 5
                },
          
          
                350: {
                  slidesPerView: 1.1,
                  spaceBetween: 10
                },
                460: {
                  slidesPerView: 1.3,
                  spaceBetween: 10
                },
                560: {
                  slidesPerView: 2.1,
                  spaceBetween: 10
                },
                660: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                700: {
                  slidesPerView: 2.3,
                  spaceBetween: 10
                },
          
                900:{
                  slidesPerView: 2.1,
                  spaceBetween: 10
                },
          
                1200:{
                  slidesPerView: 1,
                  spaceBetween: 10
                }
              },
            
          
              
              // Navigation arrows
              navigation: {
              nextEl: '.movie-awards-Next',
              prevEl: '.movie-awards-Prev',
              },
              
          
            });
              
        }

        movieAwardsSlider();
    }

    _fastSlide(){

        const fastSlider = function(){
            const swiper = new Swiper('.fast-swiper', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
              slidesPerView:1.1,
              spaceBetween: 10,
              allowTouchMove: true,
          
              breakpoints: {
                // when window width is >= 320px
                200: {
                  slidesPerView: 1.1,
                  spaceBetween: 5
                },
          
                350: {
                  slidesPerView: 1.5,
                  spaceBetween: 10
                },
                460: {
                  slidesPerView: 1.7,
                  spaceBetween: 10
                },
                560: {
                  slidesPerView: 2.1,
                  spaceBetween: 10
                },
                660: {
                  slidesPerView: 2.2,
                  spaceBetween: 10
                },
                700: {
                  slidesPerView: 2.3,
                  spaceBetween: 10
                },
          
                1200:{
                  slidesPerView: 1,
                  spaceBetween: 10
                }
              },
            
          
              
              // Navigation arrows
              navigation: {
              nextEl: '.fast-Next',
              prevEl: '.fast-Prev',
              },
              
          
            });
              
          
        }

        fastSlider();
    }



    _liveSlide(){

      const liveSlider = function(){
          const swiper = new Swiper('.live-swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView:1.1,
            spaceBetween: 10,
            allowTouchMove: true,
        
            breakpoints: {
              // when window width is >= 320px
              200: {
                slidesPerView: 1.1,
                spaceBetween: 5
              },
        
              350: {
                slidesPerView: 1.5,
                spaceBetween: 10
              },
              460: {
                slidesPerView: 1.7,
                spaceBetween: 10
              },
              560: {
                slidesPerView: 2.1,
                spaceBetween: 10
              },
              660: {
                slidesPerView: 2.2,
                spaceBetween: 10
              },
              700: {
                slidesPerView: 2.3,
                spaceBetween: 10
              },
        
              1200:{
                slidesPerView: 1,
                spaceBetween: 10
              }
            },
          
        
            
            // Navigation arrows
            navigation: {
            nextEl: '.live-Next',
            prevEl: '.live-Prev',
            },
            
        
          });
            
        
      }

      liveSlider();
  }
}

export default new sliderView();