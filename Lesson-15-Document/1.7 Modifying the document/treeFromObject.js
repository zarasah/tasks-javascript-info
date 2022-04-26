/**
 *  Write a function createTree that creates a nested ul/li list 
 *  from the nested object.
 */

 let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

  let div1 =  document.createElement('div');
  div1.id = 'container';
  document.body.append(div1);

  function createTree(container, data) {
    if (!data) {
      return;
    }   

    for(let item in data) {
      
      let ul1 = document.createElement('ul');
      container.append(ul1);
      let li1 = document.createElement('li');
      li1.textContent = item;
      
      ul1.append(li1);
      
      createTree(ul1, data[item]);
      
      }
        
  }

  let container = document.getElementById('container');
  createTree(container, data); // creates the tree in the container