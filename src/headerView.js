
class HeaderView{
    _header = document.querySelector('.header');
    _body = document.querySelector('.body');

    _headerRender(element) {
        // console.log(element)
        this._header.insertAdjacentHTML("beforeend",`
            <div class="hero__img_with_details ">
                <div class="swiper__container swiper__container-hero">
                    <div class="swiper heroswiper">
                        <div class="swiper-wrapper header-wrapper">
                            ${ element.map(el =>{
                               return `
                              <div class="swiper-slide hero-slide">
                                <img src="${el.poster}" alt=""  class="hero__img " >
      
                                <div class="hero__img-details">
                                    <span class=  "inline-block season__tag">Season 3</span>
                                    <span class=  "block hero__title">${el.title}</span>
                                <span class="hero__genreTitleYear inline-block">
                                
                                    <span class=  "inline-block hero__runtime">2h40m &#183</span>
                                    <span class=  "inline-block hero__year">${el.release_date} &#183</span>
                                    <span class=  "inline-block hero__genre">Action</span>
                                </span>
                                    <span class=  "block hero__overview">${el.overview}</span>
                                
                                <div class="flex">
                                        <span class=  "inline-block hero__trailer hero-helper">
                                
                                            <svg class="icon icon-play2"><use xlink:href="../images/sprite.svg#icon-play2"></use></svg>
                                            <span class=  "inline-block watch ">watch Trailer</span>
                                        </span>
                                
                                        <span class=  "inline-block add-watchlist watchlist-helper">
                                            <svg class="icon icon-bookmark"><use xlink:href="../images/sprite.svg#icon-bookmark"></use></svg>
                                            <span class=  "inline-block  add">add watchlist</span>
                                        </span>
                                </div>
                                </div>
      
                                <div class="linearGradient"></div>
                             </div>
                              `}
                            ).join('')/**MAP ENDING */}
                            </div>
                                
                                <div class="swiper-pagination heropagination"></div>
                            
                                
                                <div class="swiper-button-prev heroPrev">
                                    <span class="button-bg"></span>
                                </div>
                                <div class="swiper-button-next heroNext">
                                    <span class="button-bg"></span>
                                </div>
                            
                                 
                                <div class="swiper-scrollbar heroScroll"></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div> 
        `);
    }

    
}

export default new HeaderView();