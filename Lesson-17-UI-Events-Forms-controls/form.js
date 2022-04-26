let options = genres.options;

for (let item of options) {
    if(item.selected) {
        console.log('Text -', item.text);
        console.log('Value -', item.value);
    }
}

let option = new Option("Classic", "classic", true, true);
genres.append(option);

console.log('After adding a new selected option.');

for (let item of options) {
    if(item.selected) {
        console.log('Text -', item.text);
        console.log('Value -', item.value);
    }
}