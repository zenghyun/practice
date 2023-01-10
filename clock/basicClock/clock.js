const hourElement = document.querySelector('.hour');

const minuteElement = document.querySelector('.minute');

const secondElement = document.querySelector('.second');

let timer = null; 

function update() {

  const currentTime = new Date();

  const hour = currentTime.getHours();
  hourElement.innerText = addZeroPadding(hour);

  const minute = currentTime.getMinutes();
  minuteElement.innerText = addZeroPadding(minute);

  const second = currentTime.getSeconds();
  secondElement.innerText = addZeroPadding(second);

  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(update);
}

update();

/**
 * 2가지 형식이 되도록 앞부분에 0을 추가하는 함수
 * @param {*} num
 * @returns {string} 
 */
function addZeroPadding(num){
  return  String(num).padStart(2, '0');
}