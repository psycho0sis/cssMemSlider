const slider = document.querySelector('.slider'),
    sliderWrapper = document.querySelector('.slider-wrapper'),
    slides = document.querySelectorAll('.slide'),
    btns = document.querySelectorAll('.btn'),
    textSlides = document.querySelectorAll(".slide-text");

    console.log(slider)
      
let index = 0;

const activeSlide = n => {
    const width = slider.clientWidth;
    sliderWrapper.style.transform  = `translateX(-${index * width}px)`;
};
const activeTextSlide = n => {
    for(let textSlide of textSlides) {
        textSlide.classList.remove('active');
    }
    textSlides[n].classList.add('active');
};

const activeBtn = n => {
    for(let btn of btns) {
        btn.classList.remove('active');
    }
    btns[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
    activeTextSlide(index)
    activeSlide(index);
    activeBtn(index);
}


btns.forEach((item, indexBtn) => {
   item.addEventListener('click', () => {
       index = indexBtn;
       prepareCurrentSlide(index);
   })
})
