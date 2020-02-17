'use strict';

class Carousel {
  currentIndex = 0;
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];
  mainCarousel;
  indicators;
  buttonNext;
  buttonPrev;
  carouselInner;
  carouselItem;

  constructor(element) {
    this.el = element;
    this.createMainCarousel();
    this.createIndicators();
    this.createCarouselInner();
    this.createButtonPrev();
    this.createButtonNext();
    this.createCarouselItem();
    this.attachEvents();
  }

  attachEvents () {
    this.buttonNext.addEventListener('click', this.onButtonNextClickHandler.bind(this));
    this.buttonPrev.addEventListener('click', this.onButtonPrevClickHandler.bind(this));
    this.indicators.addEventListener('click', this.onIndicatorsClickHandler.bind(this));
  }

  onButtonNextClickHandler () {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex < this.slides.length) {
      this.carouselItem.remove();
      this.createCarouselItem();
      let activeIndicator = this.indicators.querySelector('[data-slide-to="' + this.currentIndex + '"]');
      let indicators = this.indicators.querySelectorAll('.carousel-indicator');
      for (let i = 0 ; i < indicators.length ; i++) {
        indicators[i].classList.remove('active');
      }
      activeIndicator.classList.add('active');
    }
    else {
      this.carouselItem.remove();
      this.currentIndex = 0;
      this.createCarouselItem();
      let activeIndicator = this.indicators.querySelector('[data-slide-to="' + this.currentIndex + '"]');
      let indicators = this.indicators.querySelectorAll('.carousel-indicator');
      for (let i = 0 ; i < indicators.length ; i++) {
        indicators[i].classList.remove('active');
      }
      activeIndicator.classList.add('active');
    }
  }

  onButtonPrevClickHandler () {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex >= 0) {
      this.carouselItem.remove();
      this.createCarouselItem();
      let activeIndicator = this.indicators.querySelector('[data-slide-to="' + this.currentIndex + '"]');
      let indicators = this.indicators.querySelectorAll('.carousel-indicator');
      for (let i = 0 ; i < indicators.length ; i++) {
        indicators[i].classList.remove('active');
      }
      activeIndicator.classList.add('active');
    }
    else {
      this.carouselItem.remove();
      this.currentIndex = this.slides.length - 1;
      this.createCarouselItem();
      let activeIndicator = this.indicators.querySelector('[data-slide-to="' + this.currentIndex + '"]');
      let indicators = this.indicators.querySelectorAll('.carousel-indicator');
      for (let i = 0 ; i < indicators.length ; i++) {
        indicators[i].classList.remove('active');
      }
      activeIndicator.classList.add('active');
    }
  }

  onIndicatorsClickHandler(event) {
    let target = event.target;
    if (target.tagName !== 'LI') {
      return;
    }
    let indicators = this.indicators.querySelectorAll('.carousel-indicator');
    for (let i = 0 ; i < indicators.length ; i++) {
      indicators[i].classList.remove('active');
    }
    target.classList.add('active');
    this.currentIndex = target.getAttribute('data-slide-to');
    this.carouselItem.remove();
    this.createCarouselItem();
  }




  createMainCarousel () {
    this.mainCarousel = document.createElement('div');
    this.mainCarousel.classList.add('main-carousel', 'carousel', 'slide');
    this.mainCarousel.id = 'mainCarousel';
    this.el.append(this.mainCarousel);
  }

  createIndicators () {
    this.indicators = document.createElement('ol');
    this.indicators.classList.add('carousel-indicators');
    let indicator;
    for (let i = 0 ; i < this.slides.length ; i++) {
      indicator = this.createIndicator(i);
      this.indicators.append(indicator);
    }
    this.mainCarousel.append(this.indicators);
    let firstIndicator = this.indicators.querySelector('.carousel-indicator');
    firstIndicator.classList.add('active');
  }

  createIndicator (i) {
    let li = document.createElement('li');
    li.classList.add('carousel-indicator');
    li.setAttribute('data-slide-to', i);
    li.setAttribute('data-target', '#mainCarousel');
    return li;
  }

  createCarouselInner () {
    this.carouselInner = document.createElement('div');
    this.carouselInner.classList.add('carousel-inner');
    this.mainCarousel.append(this.carouselInner);
  }

  createButtonPrev () {
    this.buttonPrev = document.createElement('button');

    this.buttonPrev.setAttribute('href', '#mainCarousel');
    this.buttonPrev.setAttribute('role', 'button');
    this.buttonPrev.setAttribute('data-slide', 'prev');
    this.buttonPrev.classList.add('carousel-control-prev');
    this.mainCarousel.append(this.buttonPrev);

    let span = this.createSpan();
    span.classList.add('carousel-control-prev-icon');
    span.setAttribute('aria-hidden', 'true');
    this.buttonPrev.append(span);

    let spanName = this.createSpan();
    spanName.innerHTML = 'Previous';
    spanName.classList.add('sr-only');
    this.buttonPrev.append(spanName);
  }

  createButtonNext () {
    this.buttonNext = document.createElement('button');

    this.buttonNext.setAttribute('href', '#mainCarousel');
    this.buttonNext.setAttribute('role', 'button');
    this.buttonNext.setAttribute('data-slide', 'next');
    this.buttonNext.classList.add('carousel-control-next');
    this.mainCarousel.append(this.buttonNext);

    let span = this.createSpan();
    span.classList.add('carousel-control-next-icon');
    span.setAttribute('aria-hidden', 'true');
    this.buttonNext.append(span);

    let spanName = this.createSpan();
    spanName.innerHTML = 'Next';
    spanName.classList.add('sr-only');
    this.buttonNext.append(spanName);
  }

  createSpan () {
    let span = document.createElement('span');
    return span;
  }


  createCarouselItem () {
    let slide = this.slides[this.currentIndex];
    this.carouselItem = document.createElement('div');
    this.carouselItem.classList.add('carousel-item', 'active');
    this.carouselInner.append(this.carouselItem);
    let img = document.createElement('img');
    img.setAttribute('src', slide.img);
    img.setAttribute('alt', 'Activelide');
    this.carouselItem.append(img);
    let container = document.createElement('div');
    container.classList.add('container');
    this.carouselItem.append(container);
    let carouselCaption = document.createElement('div');
    carouselCaption.classList.add('carousel-caption');
    container.append(carouselCaption);
    let h3 = document.createElement('h3');
    h3.classList.add('h1');
    h3.innerHTML = slide.title;
    carouselCaption.append(h3);
    let div2 = document.createElement('div');
    carouselCaption.append(div2);
    let a = document.createElement('a');
    a.classList.add('btn');
    a.setAttribute('href', '#');
    a.setAttribute('role', 'button');
    a.innerHTML = 'View all DEALS';
    div2.append(a);
    let svg = document.createElement('img');
    svg.setAttribute('src', 'assets/icons/icon-angle-white.svg');
    svg.setAttribute('alt', '');
    svg.classList.add('ml-3');
    a.append(svg);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
