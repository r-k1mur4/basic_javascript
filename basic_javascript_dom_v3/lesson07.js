{

  //ボタン押下時に全てとli要素のテキストを変更する

  const btn = document.querySelector("button");
  const targetLis = document.querySelectorAll('.target');
  const secondLi = document.querySelector('#second');


  btn.addEventListener('click', () => {

    // lis[0].textContent = 'Changed!!';
    // lis[1].textContent = 'Changed!!';
    // lis[2].textContent = 'Changed!!';

    secondLi.textContent = 'Second changed!!'

    targetLis.forEach((li) => {
      li.textContent = 'Changed by forEach!!'
    })


  });


}
