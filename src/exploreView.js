import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

export const exploreMain = function(photoBank,exploreData){
    const exploreSlider = function(){
        const swiper = new Swiper(".exploreswiper", {


          slidesPerView:2.5,
          spaceBetween: 20,
          allowTouchMove: true,
      
          direction: 'horizontal',
          loop: true,
      
      
          navigation: {
            nextEl: '.explore-Next',
            prevEl: '.explore-Prev',
            },
        });

        swiper.on('realIndexChange ',function(){
            //console.log(swiper.realIndex)
                
            photoBank.forEach((el,i) =>{
                if(swiper.realIndex - 1 === i) {
                    const {poster} = photoBank[swiper.realIndex];
                    
                    const explore = document.querySelector('.explore');
                   
                   // console.log(slide[i+1]);
                    explore.style.backgroundImage = `url(${poster})`;   
                }

            })

            exploreData.forEach((el,i) =>{

                const title = document.querySelector('.featured-movie-title');
                    const overview = document.querySelector('.featured-movie-overview')
        
                if(swiper.realIndex - 1 === i){
                     title.innerHTML = exploreData[swiper.realIndex].title;
                     overview.innerHTML = exploreData[swiper.realIndex].overview;

                    //console.log(exploreData[i].title)
                }

                if(swiper.realIndex === 0){
                    title.innerHTML = exploreData[0].title;
                    overview.innerHTML = exploreData[0].overview;
                }
            })


        })


        const next = document.querySelector('.explore-Next');
        const prev = document.querySelector('.explore-Prev');


        function greenBorderFunctionality(){
            const slide = document.querySelectorAll('.explore-slide');

            slide.forEach( (el,i)=> {
                if(el.classList.contains('swiper-slide-active') ){
                    //console.log("okay good to go");

                    slide[i].style.border = '5px solid #00925d'
                }

                else{
                    slide[i].style.border = 'rgba(0, 146, 93,1)'
                }

            })


        }
        
        //console.log(next )
        next.addEventListener('click',greenBorderFunctionality);

        prev.addEventListener('click',greenBorderFunctionality);
        
    }
    exploreSlider();
}


