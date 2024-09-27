

const input = document.querySelector('input');

// inputにフォーカスしたときにpタグに警告文を表示する
// document.addEventListener('keydown', (e) => {
//   document.querySelector('p').textContent = e.key;
// });


// mouseoverイベント
document.addEventListener('mousemove', (e) => {
  document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
});
