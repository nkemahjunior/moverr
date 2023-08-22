class MovieView{

    _movieRender(data){
        const _movies = document.querySelector('.movies');
        
        _movies.insertAdjacentHTML('afterbegin',`
        <h1 class="realeased__heading">movies</h1>

        <div class="swiper moviesswiper">
            <div class="swiper-wrapper movies-wrapper">
            
            ${
                data.map( (el) =>{
                    return ` 
                        <div class="swiper-slide movies-slide">
                            <img src="${el.poster}" class="movies-img" alt="">
    
                                <div class="movies-slide-info">
                                    <span class="realeased-title">${el.title} </span>
                                        <span class="realeased-rating">
                                        <span class="realeased-rating-star">
                                            <svg class="icon icon-star-full"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
                                        </span> <span class="realeased-rating-num">4.9</span> <span class="realeased-rating-genre">|movie</span>
                                        </span>
                                    
                                </div>
                        </div>
                    `
                }).join('')
            }
               
              
            </div>
    
            <div>
                    
                <div class="swiper-button-prev movies-Prev">
                    <span class="button-bg"></span>
                </div>
                
                <div class="swiper-button-next movies-Next">
                    <span class="button-bg"></span>
                </div>
            </div> 
        </div>
        `)
        
    }
}

export default new MovieView();