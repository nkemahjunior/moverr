class liveView{
    _slide1 = document.querySelector('.l1')
    _slide2 = document.querySelector('.l2')
    _slide3 = document.querySelector('.l3')
    _slide4 = document.querySelector('.l4')
    _slide5 = document.querySelector('.l5')



    _liveData(el) {
            
        return ` 
        <div class="fast-slide-grid">

        <img src="${el.poster}" 
        alt=""  class="fast-slide-grid-img">

        <div class="fast-slide-grid-info">
            <span class="fast-pg">pg-12</span>
        <span class="fast-title">${el.title}  </span>
        <span class="fast-genre">Horror</span>
        <span class="fast-rating">
        <span class="fast-rating-star">
        <svg class="icon icon-star-full"><use xlink:href="../images/sprite.svg#icon-star-full"></use></svg>
        </span> <span class="fast-rating-num">4.9</span> <span class="fast-rating-genre">|movie</span>
        </span>
        </div>

    </div>
        `
}

_liveRender1(data){

    this._slide1.insertAdjacentHTML("afterbegin",`
        ${
            data.map( this._liveData)
        }
    `)
}

_liveRender2(data){

    this._slide2.insertAdjacentHTML("afterbegin",`
        ${
            data.map( this._liveData)
        }
    `)
}

_liveRender3(data){

    this._slide3.insertAdjacentHTML("afterbegin",`
        ${
            data.map( this._liveData)
        }
    `)
}

_liveRender4(data){

    this._slide4.insertAdjacentHTML("afterbegin",`
        ${
            data.map( this._liveData)
        }
    `)
}

_liveRender5(data){

    this._slide5.insertAdjacentHTML("afterbegin",`
        ${
            data.map( this._liveData)
        }
    `)
}


}

export default new liveView();