

class SeriesView{

    _seriesRender(data){
        const _series = document.querySelector('.series');

        _series.insertAdjacentHTML('afterbegin', `
            <h1 class="realeased__heading">series</h1>
            <div class="swiper seriesswiper">
                <div class="swiper-wrapper series-wrapper">
                    ${
                        data.map( el => {
                            return ` 
                            <div class="swiper-slide series-slide">
                                <img src="${el.poster}" class="series-img" alt="">
            
                                <div class="series-slide-info">
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
                        
                    <div class="swiper-button-prev series-Prev">
                        <span class="button-bg"></span>
                    </div>
                    
                    <div class="swiper-button-next series-Next">
                        <span class="button-bg"></span>
                    </div>
                </div> 
            </div>
    
        `)
    }
}

export default new SeriesView();