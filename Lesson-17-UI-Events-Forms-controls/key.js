function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => alert("You pressed 'Q' and 'W' together"),
    "KeyQ",
    "KeyW"
  );

  runOnKeys(
    hello,
    "KeyA",
    "KeyZ"
  );

  runOnKeys(
    circle,
    "KeyA",
    "KeyS"
  );

  function hello () {
    let name = prompt('Enter your name, please');
    alert(`Hello ${name}`);
  }

  function circle() {
      let circle = document.createElement('div');
      circle.classList.add('circle');
      document.body.append(circle);
  }

  document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
        let div = document.querySelectorAll('div')
        for (let item of div) {
            item.hidden = true;
            console.log(item);
        }
    }
  });