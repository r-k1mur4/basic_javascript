{


  const moreScores = {
    shiro: 77,
    goro: 88,
  };
  const scores = {
    taro: 80,
    jiro: 70,
    suburo: 90,
    ...moreScores,
  };

  // const {taro, jiro, suburo} = scores;
  const {taro, ...others} = scores;

  console.log(taro);
  console.log(others);

}
