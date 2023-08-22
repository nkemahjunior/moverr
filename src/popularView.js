class PopularView{
    _popular = document.querySelector('.popular');

    _popularRender(element){
        // console.log(this._popular)
        this._popular.insertAdjacentHTML("beforeend",`
   

        <div class="swiper popularswiper">
            <h1 class="popular__heading">popular of the week</h1>
            <div class=" swiper-wrapper popular-wrapper">
                ${element.map((el ,i ) => {
                    return ` 
                        <div class="swiper-slide popular-slide">

                        <div class="popular-num">
                           ${i + 1}
                        </div>
                        <img src="${el.poster}" class="popular-img" alt="">   
                    
                        <div class="popular-info">
                        <span class="popular-pg">pg-12</span>
                        <span class="popular-title">${el.title}  </span>
                        <span class="popular-genre">Horror</span>
                        <span class="popular-rating">
                            <span class="popular-rating-star">
                                <svg class="icon icon-star-full"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
                            </span> <span class="popular-rating-num">4.9</span> <span class="popular-rating-genre">|movie</span>
                        </span>
                          </div>              
                    </div>
                    ` 
                }).join('')}
            </div>

            <div>
                
                
            <div class="swiper-button-prev popular-Prev">
                <span class="button-bg"></span>
            </div>

            <div class="swiper-button-next popular-Next">
                <span class="button-bg"></span>
            </div>
        </div>
            
        
            
    

        </div>

        `)
    }
}

export default new PopularView();