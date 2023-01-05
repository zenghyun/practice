const naverSearchButton = document.querySelector('#naverSearchButton');

naverSearchButton.addEventListener('click', () => {
  const naverTextArea = document.querySelector('#naverTextArea').value;

  const plusedText = naverTextArea.concat('칩');

  const encodedText = encodeURIComponent(plusedText);
  
  const naverURL = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${encodedText}`;

  window.open(naverURL);
  
})
