let div = document.querySelector('div');
let p = document.querySelector('p');
let span = document.querySelector('span');

const text = '<b>My name is Zara!</b>';

div.append(document.createTextNode(text));  //  <b>My name is Zara!</b>
p.innerHTML = text; //  My name is Zara! (BOLD)
span.textContent = text;  //  <b>My name is Zara!</b>

console.log(div);
console.log(p);
console.log(span);

console.log(document.body);