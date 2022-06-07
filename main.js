index = 0;
images = document.querySelectorAll('.imagecontent img');
console.log(images)
max = images.length;

function trocaSlide() {
    images[index].classList.remove('selected');
    index++
    if (index >= max) {
        index = 0;
    }
    images[index].classList.add('selected');
}
function startEvents() {
    let time = 5000;
    setInterval(() => { trocaSlide() }, time);
}

window.addEventListener('load', startEvents)