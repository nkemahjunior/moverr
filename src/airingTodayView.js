class AiringToday{
    _explore__container = document.querySelector('.explore__container');

    _airingTodayInfoRender(data){

        this._explore__container.insertAdjacentHTML("afterbegin", `
        <div class="explore__flex1">
        <span class="featured">airing today</span>
        <span class="featured-supporting">best movies for you today</span>
        <span class="featured-num">#1 in Australia</span>
        <span class="featured-movie-title">${data[0].title}</span>
        
        <span class="__genre-runtime">   
            <span class="star">
                <svg class="icon icon-star-full t"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
            </span>
            <span class="rate bold">4.9 |</span> 
            <span class="time">2h40m &#183 2022&#183 superhero&#183 action</span>
        </span>
        
        <span class="featured-movie-overview ">
        ${data[0].overview}
        </span>
    
        <div class="explore-flex">
            <div class="flex ">
                <span class=  "inline-block hero__trailer explore-margin-helper">
    
                    <svg class="icon icon-play2"><use xlink:href="../images/sprite.svg#icon-play2"></use></svg>
                    <span class=  "inline-block watch">watch Trailer</span>
                </span>
    
                <span class=  "inline-block add-watchlist explore-margin-helper">
                    <svg class="icon icon-bookmark"><use xlink:href="../images/sprite.svg#icon-bookmark"></use></svg>
                    <span class=  "inline-block  add">add watchlist</span>
                </span>
        </div>
        </div>
    
        
    </div>

        `)
    }

    _airingTodayRender(element){
        const explore = document.querySelector('.explore');
        explore.style.backgroundImage = `url(${element[0].poster}`; 

        this._explore__container.insertAdjacentHTML("beforeend",`
        <div class="explore__flex2">
        <div class="swiper exploreswiper">
            <div class="swiper-wrapper explore-wrapper">
                
                ${element.map(el => {
                    return `
                    <div class="swiper-slide explore-slide"> 
                        <img src="${el.poster}" class="explore-img" alt="">
        
                        <div class="realeased-slide-info">
                            <span class="realeased-title">${el.title} </span>
                            <span class="realeased-rating">
                            <span class="realeased-rating-star">
                                <svg class="icon icon-star-full"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
                            </span> <span class="realeased-rating-num">4.9</span> <span class="realeased-rating-genre">|movie</span>
                            </span>
                        </div>
        
                    </div>
                    `
                }).join('')}
            </div> 
    
            
            <div>
                <div class="swiper-button-prev explore-Prev">
                    <span class="button-bg"></span>
                </div>
                
                <div class="swiper-button-next explore-Next">
                    <span class="button-bg"></span>
                </div>
            </div> 
        </div>
        
        
    </div>
        `)
    }
}

export default new AiringToday();