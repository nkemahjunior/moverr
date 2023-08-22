class FastView{

    _slide1 = document.querySelector('.f1')
    _slide2 = document.querySelector('.f2')
    _slide3 = document.querySelector('.f3')
    _slide4 = document.querySelector('.f4')
    _slide5 = document.querySelector('.f5')


    _fastData(el) {
            
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

        
    


   _fastRender1(data){

        this._slide1.insertAdjacentHTML("afterbegin",`
            ${
                data.map( this._fastData)
            }
        `)
   }

   _fastRender2(data){

        this._slide2.insertAdjacentHTML("afterbegin",`
            ${
                data.map( this._fastData)
            }
        `)
   }

   _fastRender3(data){

        this._slide3.insertAdjacentHTML("afterbegin",`
            ${
                data.map( this._fastData)
            }
        `)
   }

   _fastRender4(data){

        this._slide4.insertAdjacentHTML("afterbegin",`
            ${
                data.map( this._fastData)
            }
        `)
   }

   _fastRender5(data){

        this._slide5.insertAdjacentHTML("afterbegin",`
            ${
                data.map( this._fastData)
            }
        `)
   }


}

export default new FastView();