{

  // ドロップダウンリストの値にアクセスする

  const btn = document.querySelector("button");

  btn.addEventListener('click', () => {

    alert(document.querySelector('select').value);

  });

}
