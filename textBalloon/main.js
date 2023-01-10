    const paragraph = document.querySelector('.paragraph');
    const balloon = document.querySelector('#balloon');

    paragraph.addEventListener('selectstart', () => {
      paragraph.addEventListener('mouseup', (event) => {
        const selectedText = window.getSelection().toString();
        textValidation(selectedText, event);
      });
    });


    function textValidation(selectedText, event) {
      if (selectedText.length > 0) {
        balloon.innerHTML = selectedText;
        balloon.classList.add('on');
        balloon.style.top = `${event.clientY - balloon.clientHeight * 2.5}px`;
        balloon.style.left = `${event.clientX - balloon.clientWidth / 2}px`;
      } else {
        removeEvent();
      }
    }

    balloon.addEventListener('click', () => {
      removeEvent();
    })
    
    function removeEvent() {
      balloon.classList.remove('on');
    }