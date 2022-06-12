const fsBtn = document.getElementById('fs-btn');
const firstSlideshow = document.getElementById('first-slideshow');
const secondSlideshow = document.getElementById('second-slideshow');


fsBtn.addEventListener('click', hideFs);

function hideFs(){
    firstSlideshow.style.visibility = 'hidden';
    secondSlideshow.style.visibility = 'visible';
}
