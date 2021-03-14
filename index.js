const randomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }
  
  const degree = [0, 30, 45, 60, 90, 180, 270, 360]
  const value = ['0', '1/2', '√2/2', '√3/2', '1', '-1', '√3/3', '√3', '-']
  var latestans = 0;
  var correct = 0;
  var wrong = 0;
  
  const sin = {
      0: '0',
      30: '1/2',
      45: '√2/2',
      60: '√3/2',
      90: '1',
      180: '0',
      270: '-1',
      360: '0'
  };
  const cos = {
      0: '1',
      30: '√3/2',
      45: '√2/2',
      60: '√1/2',
      90: '0',
      180: '-1',
      270: '0',
      360: '1'
  };
  const tg = {
      0: '0',
      30: '√3/3',
      45: '1',
      60: '√3',
      90: '-',
      180: '0',
      270: '-',
      360: '0'
  };
  const ctg = {
      0: '-',
      30: '√3',
      45: '1',
      60: '√3/3',
      90: '0',
      180: '-',
      270: '0',
      360: '-'
  }
  
  const generator = () => {
      let result
      let rand = randomInt(4);
      let rand2 = randomInt(8);
      var rand3 = [sin[degree[rand2]]]
      while(unique(rand3).length < 4){
          rand3.push(value[randomInt(9)]);
      }
      rand3 = unique(rand3)
      switch (rand){
           case 0:
              result = ['sin(', degree[rand2], sin[degree[rand2]], rand3[1], rand3[2], rand3[3]]
              return result
          case 1:
              result = ['cos(', degree[rand2], cos[degree[rand2]], rand3[1], rand3[2], rand3[3]]
              return result
          case 2:
              result = ['tg(', degree[rand2], tg[degree[rand2]], rand3[1], rand3[2], rand3[3]]
              return result
          case 3:
              result = ['ctg(', degree[rand2], ctg[degree[rand2]], rand3[1], rand3[2], rand3[3]]
              return result
      }
  }
  var output = (answer) => {
      console.log(latestans, answer)
      if(latestans == answer){
        correct++
        document.querySelector('#counter').innerHTML = correct;
      }else if(answer == undefined){
        document.querySelector('#counter').innerHTML = correct;
        document.querySelector('#wrong').innerHTML = wrong;
      }
      else{
        wrong++
        document.querySelector('#wrong').innerHTML = wrong;
      }
      var res = generator();
      document.querySelector('#function').innerHTML = `${res[0]}${res[1]})`;
      latestans = res[2]
      res.shift();res.shift();//Не забыть пофиксить
      shuffle(res);
      document.querySelectorAll('.ans').forEach(function (ans, i) {
          ans.innerHTML = res[i]
      })
  }
  output();