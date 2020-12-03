document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

   

    _init() {
        new MobileMenu();
    }

    // _sideAnimation(el, inview) {
    //     if(inview) {
    //         this.sides.forEach(side => side.classList.add('inview'));
    //     } else {
    //         this.sides.forEach(side => side.classList.remove('inview'));
    //     }
    // }
    // _scrollInit() {
    //     this.observers = new ScrollObserver('.main-area', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px"});
    // }
    
}


