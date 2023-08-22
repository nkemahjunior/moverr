class MovieAwardsView{

    _movieAwardsRender(data){
        const _MovieAwards = document.querySelector('.movie-awards');
        
        _MovieAwards.insertAdjacentHTML('afterbegin',`
        <div class="movie-awards-1">
                
        <div class="swiper movie-awards-swiper">
            <h1 class="realeased__heading">trending tv shows today</h1>
            <div class="swiper-wrapper movie-awards-wrapper">

            ${
                data.map( el =>{
                    return `
                    <div class="swiper-slide movie-awards-slide">
                    <img src="${el.poster}" alt="" class="movie-awards-img">
        
                    <div class="movie-awards-info">
                        <span class="movie-awards-category">best pictures</span>
        
                        <span class="movie-awards-title">${el.title}</span>
        
                        <span class="movie-awards-rating-genre">
                            <span class="__genre-runtime">   
                                <span class="star">
                                    <svg class="icon icon-star-full t"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
                                </span>
                                <span class="rate bold">4.9 |</span> 
                                <span class="time">2h40m &#183 2022&#183 superhero&#183 action</span>
                            </span>
                        </span>
        
                        <span class="movie-awards-overview">${el.overview}</span>
        
                        <div class="flex2">
                            <span class=  "inline-block hero__trailer">
        
                                <svg class="icon icon-play2"><use xlink:href="../images/sprite.svg#icon-play2"></use></svg>
                                <span class=  "inline-block watch ">watch Trailer</span>
                            </span>
        
                            <span class=  "inline-block add-watchlist">
                                <svg class="icon icon-bookmark"><use xlink:href="../images/sprite.svg#icon-bookmark"></use></svg>
                                <span class=  "inline-block  add">add watchlist</span>
                            </span>
                        </div>
                    </div>
                </div>
                    `
                }
                ).join('')
            }
        
        
        
            </div>
        
            <div>
                <div class="swiper-button-prev movie-awards-Prev">
                    <span class="button-bg"></span>
                </div>
                
                <div class="swiper-button-next movie-awards-Next">
                    <span class="button-bg"></span>
                </div>
            </div>
        
        </div>
        </div>
        `)
    }
}

export default new MovieAwardsView();