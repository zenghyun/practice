const numberMaxLength = function (e) {
  const MAX_LENGTH = 1;
  if(e.value.length > MAX_LENGTH){
    e.value = e.value.slice(0, MAX_LENGTH);
  }
};

const searchWordText = document.querySelector('#search-word-input');

const prefectureList = document.querySelectorAll('#prefecture-list button');

searchWordText.addEventListener('keyup', () =>{

  const searchWord = searchWordText.value;
  

    prefectureList.forEach( (element) => {
      
      if( !searchWord || searchWord == ''){
        element.classList.remove('hide');
        return;
      }

      const prefectureName = element.dataset.name;

      const phonetic = element.dataset.phonetic;

      if( prefectureName.charAt(0) === searchWord.charAt(0) ||
          phonetic.charAt(0) === searchWord.charAt(0)){
            element.classList.remove('hide');
          } else {
            element.classList.add('hide');
          }

    });
  });