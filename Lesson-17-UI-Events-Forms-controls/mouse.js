const ul = document.querySelector('ul');
const liList = document.querySelectorAll('li');

ul.onmousedown = function () {
    return false;
}

liList.forEach(item => {
    item.onclick = function (event) {
        let target = event.target;
        if (event.ctrlKey || event.metaKey) {
            target.classList.toggle("selected");
        } else {
            let selected = document.querySelectorAll(".selected");
        for(let item of selected) {
            item.classList.remove("selected");
        }
        target.classList.toggle("selected");
        }
    }
})