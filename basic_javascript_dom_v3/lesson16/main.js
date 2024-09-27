

const input = document.querySelector('input');

// inputにフォーカスしたときにpタグに警告文を表示する
input.addEventListener('focus', () => {
  document.querySelector('p').textContent = 'English Only!!!'
});

// inputからフォーカス外したときにしたときにpタグの警告文を非表示
input.addEventListener('blur', () => {
  document.querySelector('p').textContent = ''
});

// 初期表示でinputにfocusしておく
input.focus();
