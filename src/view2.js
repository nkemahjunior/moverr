

class navMenuView2{
    _headerr = document.querySelector('.headerr');
    _explore = document.querySelector(".explore");
    _menu = document.querySelector(".menu");
    _menuContent = document.querySelector(".menuContent");
    _body = document.querySelector(".body");
    _mainContainer = document.querySelector('.main-container');
    _a = document.querySelector('.a');
    _b = document.querySelector('.b');
    _c = document.querySelector('.c');
    _menuHolder = document.querySelector('.menu__holder-div ');

    _nav = document.querySelector('.nav');
    _navHeight = this._nav.getBoundingClientRect().height;
    _test = this._headerr.getBoundingClientRect().height;
      
    _headerrObserver;

    
    
    
    
    

    _navMenu(){

        const menuClick = function(){
                   
            //console.log("clicked")
            this._a.classList.toggle('first');
            this._b.classList.toggle('second');

            this._b.classList.toggle('margin');
            this._c.classList.toggle('third');

            this._c.classList.toggle('margin');           
            this._menuContent.classList.toggle('addAnimation');
            this._menuContent.classList.toggle('removeAnimation');
           
        }

        this._menu.addEventListener('click',menuClick.bind(this));


        const bodyClick = function(){
            this._a.classList.remove('first');
            this._b.classList.remove('second');

            this._b.classList.remove('margin');
            this._c.classList.remove('third');
            this._c.classList.remove('margin');

            this._menuContent.classList.add('addAnimation');
            this._menuContent.classList.remove('removeAnimation');

        }


        this._mainContainer.addEventListener('click',bodyClick.bind(this));
    }


    _testt(){
        const mainFrame = document.querySelector('.mainFrame');
        console.log(mainFrame);
    }

    _one(){
        const mainFrame = document.querySelector('.mainFrame');
        console.log(mainFrame);
    }
    

    
}

export default new navMenuView2();