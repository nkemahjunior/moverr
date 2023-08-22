class LatestMovie{
    _logos = document.querySelector('.logos');

    _latestRender(element){
        this._logos.insertAdjacentHTML("afterend",`
        <section class="realeased">
        <div class="swiper mySwiper">
            <h1 class="realeased__heading">upcoming</h1>
            <div class=" swiper-wrapper realease-wraper">
                ${element.map(el =>{
                    return `
                    <div class="swiper-slide realeased-slide">
                     <img src="${el.poster}" class="realeased-img" alt="">
                        <div class="realeased-slide-info">
                            <span class="realeased-title">${el.title}</span>
                            <span class="realeased-rating">
                            <span class="realeased-rating-star">
                                <svg class="icon icon-star-full"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
                            </span> <span class="realeased-rating-num">4.9</span> <span class="realeased-rating-genre">|movie</span>
                            </span>
                        </div>

                        <div class="play-pp off  ">
                         <div class="play">
                         <svg class="icont icon-play2"><use xlink:href="../images/sprite.svg#icon-play2"></use></svg>
                        </div>
                    </div>

                    </div>
                    `
                }).join('')}
    
    
            </div>
    
            <div>
            
                <div class="swiper-button-prev released-Prev">
                   <span class="button-bg"></span>
                </div>
                <div class="swiper-button-next released-Next">
                   <span class="button-bg"></span>
               </div>
        </div>
    </section>
        `);
    }

    _latestPlay(){
        const hoverEffect = function(e){
            const offTarget = e.target.closest('.realeased-slide');
            const playFilter = e.target.closest('.play-pp');
            if(offTarget)
                playFilter.classList.toggle("off")

        }

        const realeased = document.querySelector('.realeased');
        
        realeased.addEventListener('mouseover',hoverEffect) 
        realeased.addEventListener('mouseout',hoverEffect)

        realeased.addEventListener('click',function(e){
            const currentButton = e.target.closest('.play');
            if(currentButton)
                console.log("okay good")
        })
       
    }
}

export default new LatestMovie();