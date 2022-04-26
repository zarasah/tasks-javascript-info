let div = document.querySelector('div');
let text = document.createElement('textarea');
text.classList.add('textarea');

div.onclick = function () {
    text.value = div.innerHTML;
    div.replaceWith(text);
    text.focus();
    text.onkeydown = function(event) {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            this.blur();
        }
    }

    text.onblur = function() {
        end();
    }
}
 
function end() {
    div.innerHTML = text.value;
    text.replaceWith(div);
}

