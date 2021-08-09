const loadText = document.querySelector('.loading_text');
const background = document.querySelector('.background_image');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;

  blurValue = (30 * (100 - load)) / 100;
  background.style.filter = `blur(${blurValue}px)`;
  //background.style.filter = `blur(${scale(load, 0, 100, 30, 0)})px`;

  console.log(load);
}
