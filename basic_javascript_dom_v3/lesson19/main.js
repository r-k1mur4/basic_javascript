



{


// inputにフォーカスしたときにpタグに警告文を表示する
// document.addEventListener('keydown', (e) => {
//   document.querySelector('p').textContent = e.key;
// });


//　submitイベント
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('p').textContent =document.querySelector('input').value;
});

}
