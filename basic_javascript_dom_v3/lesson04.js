{

  // ボタン押下時にスタイルを変更するためのクラスをあてる

  const btn = document.querySelector("button");

  btn.addEventListener('click', () => {
    btn.classList.add('btn-changed', 'red-border');


    btn.classList.remove('btn-changed');
  });


}
