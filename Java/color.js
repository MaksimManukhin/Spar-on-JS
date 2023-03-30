function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function(){
  changeBackground('red') });



  let offset = 0;
let slideIndex = 1;

const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector('.offer__slider-inner');

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent =  `0${slideIndex}`;
} else {
    total.textContent = slides.length;
    current.textContent =  slideIndex;
}

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2); 
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }
});



//Calc

const result = document.querySelector('.calculating__result span');
   
    let sex = 'female',
        height, weight, age,
        ratio = 1.375;

        if(localStorage.getItem(`sex`)){
            sex = localStorage.getItem(`sex`)
        }else{
            sex = `female`//по умолчанию
            localStorage.setItem(`sex`,`female`)
        }

        if(localStorage.getItem(`ratio`)){
            ratio = localStorage.getItem(`ratio`)
        }else{
            ratio = 1.375;
            localStorage.setItem(`ratio`,1.375)
        }

        function initLocal(selector,activeClass){
            const elements = document.querySelectorAll(selector);
            elements.forEach(elem=>{
                elem.classList.remove(activeClass)
                if(elem.getAttribute(`id`)===localStorage.getItem(`sex`)){//как в верстке атрибут и сверяем
                    elem.classList.add(activeClass)
                }
                if(elem.getAttribute(`data-ratio`)===localStorage.getItem(`ratio`)){
                    elem.classList.add(activeClass)
                }
            });
        }
        initLocal(`#gender`,`calculating__choose-item_active`);
        initLocal(` calculating__choose_big`,`calculating__choose-item_active`);

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____'; 
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem(`ratio`,+e.target.getAttribute('data-ratio') )
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem(`sex`,e.target.getAttribute('id'))
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');




    function getDynamicInformation(selector) {

       
        const see = document.querySelector(selector);

        see.addEventListener('input', () => {

            if(see.value.match(/\D/g)){
                see.style.border = `1 px solid orange`;
            }else{
                see.style.border = `none`;
            }

            
            switch(see.getAttribute('id')) {
                case "height":
                    height = +see.value;
                    break;
                case "weight":
                    weight = +see.value;
                    break;
                case "age":
                    age = +see.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');





