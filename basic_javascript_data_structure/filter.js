'use strict';


{

  const prices = [100, 150, 200];

  // const pricesOver150 = [];
  // // priceが１５０円以上だけ抽出
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     pricesOver150.push(price);
  //   }
  // })

  const pricesOver150 =
  prices.filter((price) => {
    return price >= 150;
  })


  console.log(pricesOver150);


}
