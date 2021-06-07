function initCarousel() {
  const previousArrow = document.querySelector('.carousel__arrow_left');
  const nextArrow = document.querySelector('.carousel__arrow_right');
  const carouselWidth = document.querySelector('.carousel__inner');
  const slidesLength = carouselWidth.querySelectorAll('.carousel__slide').length;
  let currenSlide = 1;

  previousArrow.addEventListener('click', () => {
    if (currenSlide > 1) {
      moveCarousel(false, carouselWidth, currenSlide);
      currenSlide--;
      hideArrowButtons(currenSlide, slidesLength, previousArrow, nextArrow);
    }
  });

  nextArrow.addEventListener('click', () => {
    if (currenSlide < slidesLength) {
      moveCarousel(true, carouselWidth, currenSlide);
      currenSlide++;
      hideArrowButtons(currenSlide, slidesLength, previousArrow, nextArrow);
    }
  });

  hideArrowButtons(currenSlide, slidesLength, previousArrow, nextArrow);
}

function moveCarousel(direction, carousel) {
  const slideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
  const currentTranslate = carousel.style.transform.match(/-?\d+/) || [0];
  const newTranslate = +currentTranslate[0] + slideWidth * (direction ? -1 : 1);

  carousel.style.transform = `translateX(${newTranslate}px)`;
}

function hideArrowButtons(activeSlide, slidesLength, prevBtn, nextBtn) {
  if (activeSlide === 1) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex';
  }

  if (activeSlide === slidesLength) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'flex';
  }
}
