

const button = document.querySelector('button');

button.addEventListener('click', () => {

  //  ラジオボタンは全てのタグを一度選択しなければならない
  //  forEachですべてのラジオボタンをチェックする
  //  チェックされたかどうかはradio.checkedで真偽値の判定ができる
  document.querySelectorAll('input').forEach((radio) => {
    if(radio.checked === true){
      alert(radio.value);
    }
  });
});
