/**
 *  Write an interface to create a list from user input. 
 * 
 * For every list item: 
 * 
 * Ask a user about its content using prompt. 
 * Create the <li> with it and add it to <ul>. 
 * Continue until the user cancels the input (by pressing Esc or via an empty entry). 
 * All elements should be created dynamically. 
 * 
 * If a user types HTML-tags, they should be treated like a text.
 * 
 */
 let ul = document.createElement('ul');
 document.body.append(ul);
while(true) {
    list = prompt('Enter the text for the list item');
    if (list === null || list === '') {
        break;
    }
    let li = document.createElement('li');
    li.textContent = list;
    ul.append(li);
}


