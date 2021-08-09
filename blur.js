const loadText = document.querySelector('.loading_text');
const background = document.querySelector('.background_image');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  console.log(load);
}
