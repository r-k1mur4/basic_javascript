"use strict";

{
  // 実行タイミングはクリックされたとき
  document.querySelector("button").addEventListener("click", () => {
    // console.log("Clicked!");
    // document.querySelector('p').textContent = 'Hello！！！';
    document.querySelector('p').textContent = document.querySelector("button").textContent;
  });

  console.log("Hello!");
}
