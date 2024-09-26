{

  //ボタン押下時に全てとli要素のテキストを変更する：querySelectorAll

  const btn = document.querySelector("button");
  const lis = document.querySelectorAll('li');

  btn.addEventListener('click', () => {

    // lis[0].textContent = 'Changed!!';
    // lis[1].textContent = 'Changed!!';
    // lis[2].textContent = 'Changed!!';


    lis.forEach((li) => {
      li.textContent = 'Changed by forEach!!'
    })


  });


}
