window.onload = () => {
  owlCarousel.init()
  // countUpConfig.init()
  // lazyLoading.init()
  // header.init()
}

const loading = {
  init: function () {
    this.configLoading()
  },
  configLoading: function () {
    
  }
}

const lazyLoading = {
  init: function () {
    this.config()
  },
  config: function () {
    const lazyLoadInstance = new LazyLoad({});
  }
}

const owlCarousel = {
  init: function () {
    this.setupCardsCarousel()
  },
  setupCardsCarousel: function () {
    const $owl = $("#cards-carousel").owlCarousel({
      responsive: {
        0: {
          items: 3,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      navText: ['<img src="./assets/icons/icon-angle-left.svg" alt="" />', '<img src="./assets/icons/icon-angle-right.svg" alt="" />'],
      margin: 20,
    });
  },
}

const header = {
  init: function () {
    // this.scrollHeaderEffect()
  },
  scrollHeaderEffect: function () {
    const header = document.querySelector('.header-layout')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) header.classList.add('active')
      else header.classList.remove('active')
    })
  },
}

const countUpConfig = {
  init: function () {
    // this.configCountUpWelcomeSection()
  },
  configCountUpWelcomeSection: function () {
    const dataCountWelcomeSection = [{
        targetHTML: '#countUp-long-term',
        numberCountUp: 92,
        suffix: '%',
      },
      {
        targetHTML: '#countUp-offices-internationally',
        numberCountUp: 60
      },
      {
        targetHTML: '#countUp-years-in-viet-nam ',
        numberCountUp: 7
      },
    ]
    this.setupScrollEvent('.section-welcome .about-wrapper', dataCountWelcomeSection)
  },
  setupScrollEvent: function (targetHTML, elementsCountUp) {
    const target = document.querySelector(targetHTML)
    if (target) {
      const options = {
        threshold: 1,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            elementsCountUp.forEach((item) => this.setupCountUp(item.targetHTML, item.numberCountUp, item.suffix))
            observer.unobserve(entry.target);
          }
        })
      }, options);
      observer.observe(target);
    }
  },
  setupCountUp(targetId, number, suffix = '') {
    const options = {
      startVal: 0,
      duration: 5,
      suffix,
    }
    const target = document.querySelector(targetId)
    const countUpObj = new CountUp(target, number, options)
    countUpObj.start()
  }
}
