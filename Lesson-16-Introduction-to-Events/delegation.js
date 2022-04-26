let div = document.querySelectorAll('.pane');
let button = document.querySelectorAll('.remove-button');
let i = 0;
while (div[i]) {
    button[i].style.left = div[i].clientWidth - button[i].clientWidth + 'px';
    i++;
}
let div1 = document.querySelector('div');
div1.onclick = function (event) {
    let target = event.target;
    if (target.tagName !== 'BUTTON') {
        return;
    }
    target.closest('.pane').hidden = true;
}

const resetButton = document.querySelector('#reset');
resetButton.onclick = function () {
    div.forEach(item => item.hidden = false);
}