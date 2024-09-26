'use strict';

{

  // ラジオボタンの値にアクセスする

  document.querySelector('button') .addEventListener('click', () =>{
    // radio属性のためinputタグ全てを取得
    document.querySelectorAll('input').forEach((radio) => {
      // チェックがついているとtrueになる
      if (radio.checked === true) {
        alert(radio.value);
      }
    });
  });


}
