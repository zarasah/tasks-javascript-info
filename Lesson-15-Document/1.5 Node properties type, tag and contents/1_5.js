const li = document.querySelectorAll('li');

for (let item of li) {
    
    const count = item.getElementsByTagName('li').length;
    console.log(item.firstChild.data, count);
}
