'use strict';

{

  let start = 'Tokyo';
  let goal = 'Osaka';

  // let temp = '';
  // temp = start;
  // start = goal;
  // goal = temp;

  // 分割代入で値を入れ替える
[goal, start] = [start, goal];

  console.log(start);
  console.log(goal);


}
