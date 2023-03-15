// 아코디언 클릭 이벤트 정의
const btns = document.querySelectorAll('.accordion .accordion_item > button');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let accordion_item = e.currentTarget.parentNode;
        accordion_item.classList.toggle('open');
    });
});