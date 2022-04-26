let time = new Date();

let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

let div = document.createElement('div');

div.innerHTML = <span>hour : minute : second</span>

