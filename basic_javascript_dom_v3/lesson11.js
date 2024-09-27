'use strict';

{

  // ラジオボタンの値にアクセスする

  // document.querySelector('button') .addEventListener('click', () =>{
  //   // radio属性のためinputタグ全てを取得
  //   document.querySelectorAll('input').forEach((radio) => {
  //     // チェックがついているとtrueになる
  //     if (radio.checked === true) {
  //       alert(radio.value);
  //     }
  //   });
  // });


  // テキスト入力時にボタン押下でその内容をアラートで表示
    // - ボタンのイベントリスナー ←Done
    // - inputの値を取得  ←Done
    // - alertでその内容を表示
  const button = document.querySelector('button');

    button.addEventListener('click', () => {

      const inputTxt = document.querySelector('input').value;

      alert(inputTxt);
  //  /テキスト入力時にボタン押下でその内容をアラートで表示






    });


}
