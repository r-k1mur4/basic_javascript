{

  // inputに入力されたテキストをアラートで表示する

  const btn = document.querySelector("button");

  btn.addEventListener('click', () => {
    let textarea = document.querySelector('textarea');
    // テキストエリアの値をクリア
    textarea.value = '';
  });

}
