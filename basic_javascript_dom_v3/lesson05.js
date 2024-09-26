{

  // ボタン押下時に装飾用のクラスを切り替える

  const btn = document.querySelector("button");

  btn.addEventListener('click', () => {
    const isStyled = btn.classList.contains('btn-changed');
    // true | false

    // if (isStyled === false) {
    //   btn.classList.add('btn-changed');
    // } else {
    //   btn.classList.remove('btn-changed');
    // }

    btn.classList.toggle('btn-changed');

  });


}
