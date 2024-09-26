'use strict';

{

  // チェックボックスの値にアクセスする

  document.querySelector('button') .addEventListener('click', () =>{

    // 一回でアラート表示するために配列を作成
    const colors = [];
    document.querySelectorAll('input').forEach((checkbox) => {
      // チェックがついているとtrueになる
      if (checkbox.checked === true) {
        // 配列colorsにチェックボックスの値を格納していく
        colors.push(checkbox.value);
      }
    });
    // colorsの値をまとめてアラート表示する
    alert(colors.join(','));
  });


}
