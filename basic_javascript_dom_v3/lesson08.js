{

  // 作成した要素をDOMに追加する

  const btn = document.querySelector("button");

  btn.addEventListener('click', () => {
    const liElement = document.createElement('li');
    liElement.textContent = 'This is Hanako!!!.';

    document.querySelector('ul').appendChild(liElement);

    if (confirm('Sure?')) {
      document.querySelector('#second').remove();
    }

  });

}
