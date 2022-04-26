let ul = document.querySelector('#tree');
let li = document.querySelectorAll('li');

for(let item of li) {
    let span = document.createElement('span');
    item.prepend(span);
    span.append(span.nextSibling);
}

ul.onclick = function (event) {
    let target = event.target;
    if (target.tagName === 'SPAN') {
        if (!target.parentNode.querySelector('ul')) {
            return;
        }
        target.nextElementSibling.hidden =  !target.nextElementSibling.hidden;
    }  
}