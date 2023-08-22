const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const explore = document.querySelector(".explore");
const menu = document.querySelector(".menu");
const menuContent = document.querySelector(".menuContent");
const body = document.querySelector(".body");
const mainContainer = document.querySelector('.main-container');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const menuHolder = document.querySelector('.menu__holder-div ')

const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight)


const changeNavbg = function(entries) {
    const [entry] = entries;
    //console.log(entry);
    if(!entry.isIntersecting) nav.classList.add('nav-bg');
    else nav.classList.remove('nav-bg');
}

const headerObserver = new IntersectionObserver(changeNavbg,{
    root: null,
    threshold: 0,  /**when isIntersecting will turn true ? */
    rootMargin: `-${navHeight}px` , /**margin under header */
})

headerObserver.observe(header);

menu.addEventListener('click',function(){
    console.log("clicked")
    a.classList.toggle('first');
    //a.style.transition = "rotate 22s";
    b.classList.toggle('second');
    b.classList.toggle('margin');
    //b.style.transition = "rotate 1s";
    c.classList.toggle('third');
    c.classList.toggle('margin');
    //c.style.transition = "rotate 1s";

    menuContent.classList.toggle('menuContent-display');
})

mainContainer.addEventListener('click',function(){
    a.classList.remove('first');
    b.classList.remove('second');
    b.classList.remove('margin');
    c.classList.remove('third');
    c.classList.remove('margin');
    menuContent.classList.add('menuContent-display')
})







_observerView(observer){
        
    this._navHeight = this._nav.getBoundingClientRect().height;

    
    
    
    this._headerObserver = new IntersectionObserver( (entries) =>{
        const [entry] = entries;
        if(!entry.isIntersecting) {
               this._nav.classList.add('nav-bg');
           }
        else {
            this._nav.classList.remove('nav-bg');
        }
      }
        ,{
        root: null,
        threshold: 0,  /**when isIntersecting will turn true ? */
        rootMargin: `-${this._navHeight}px` , /**margin under header */
    });

    

    this._headerObserver.observe(this._header);
}



_changeNavbg(entries){
        
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) {
           this._nav.classList.add('nav-bg');
           console.log("intersecting")
       }
    else {
        this._nav.classList.remove('nav-bg');
        console.log("not intersecting")
    }
  
}

_observerView(observer){

this._headerObserver = new IntersectionObserver(observer.bind(this),
   {
    root: null,
    threshold : 0,
    rootMargin : `-${this._navHeight}px`
   } );
   
   this._headerObserver.observe(this._header);
}


    