const displaytable = (display) => {
    var table = document.getElementById('table');
    if (display == true) table.style.display = '';
    else table.style.display = 'none';
}
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
    uniquecounter++;
    return result;
}

const degree = [0, 30, 45, 60, 90, 180, 270, 360, 120, 135, 150, 210, 225, 240, 300, 315, 340]
const radian = ['0', 'π/6', 'π/4', 'π/3', 'π/2', 'π', '3π/2', '2π', '2π/3', '3π/4', '5π/6', '7π6', '5π/4', '4π/3', '5π/3', '7π/4', '11π/6']; //потом дописать
const value = ["-", "-1", "-1/2", "-√2/2", "-√3", "-√3/3", "0", "1", "1/2", "√2/2", "√3", "√3/2", "√3/3"]
var latestans = 0;
var correct = 0;
var wrong = 0;
var uniquecounter = 0;

const sin = {
    0: '0',
    30: '1/2',
    45: '√2/2',
    60: '√3/2',
    90: '1',
    120: '√3/2',
    135: '√2/2',
    150: '1/2',
    180: '0',
    210: '-1/2',
    225: '-√2/2',
    240: '-√3/2',
    270: '-1',
    300: '-√3/2',
    315: '-√2/2',
    340: '-1/2',
    360: '0'
};
const cos = {
    0: '1',
    30: '√3/2',
    45: '√2/2',
    60: '√1/2',
    90: '0',
    120: '-1/2',
    135: '-√2/2',
    150: '-√3/2',
    180: '-1',
    210: '-√3/2',
    225: '-√2/2',
    240: '-1/2',
    270: '0',
    300: '1/2',
    315: '√2/2',
    340: '√3/2',
    360: '1'
};
const tg = {
    0: '0',
    30: '√3/3',
    45: '1',
    60: '√3',
    90: '-',
    120: '-√3',
    135: '-1',
    150: '-√3/3',
    180: '0',
    210: '√3/3',
    225: '1',
    240: '√3',
    270: '-',
    300: '-√3',
    315: '-1',
    340: '-√3',
    360: '0'
};
const ctg = {
    0: '-',
    30: '√3',
    45: '1',
    60: '√3/3',
    90: '0',
    120: '-√3/3',
    135: '-1',
    150: '-√3',
    180: '-',
    210: '√3',
    225: '1',
    240: '√3/3',
    270: '0',
    300: '-√3/3',
    315: '-1',
    340: '-√3',
    360: '-'
}

var radiancheck = 1;
var irreg = 1;
var tgctgcheck = 1;
var reverse = 1;

const generator = () => {
    let result;
    if (tgctgcheck == 1 || tgctgcheck == 4) tgctgcheck = 4;
    else if (tgctgcheck == 0 || tgctgcheck == 2) tgctgcheck = 2;
    let rand = randomInt(tgctgcheck);
    if (irreg == 0 || irreg == 8) irreg = 8;
    else if (irreg == 1 || irreg == 17) irreg = 17;
    let rand2 = randomInt(irreg);
    switch (rand) {
        case 0:
            result = ['sin(', degree[rand2], sin[degree[rand2]]]
            return result
        case 1:
            result = ['cos(', degree[rand2], cos[degree[rand2]]]
            return result
        case 2:
            result = ['tg(', degree[rand2], tg[degree[rand2]]]
            return result
        case 3:
            result = ['ctg(', degree[rand2], ctg[degree[rand2]]]
            return result
    }
}
var output = (answer) => {
    console.log(latestans, answer)
    if (latestans == answer) {
        correct++
        document.querySelector('#counter').innerHTML = correct;
    } else if (answer == undefined) {
        document.querySelector('#counter').innerHTML = correct;
        document.querySelector('#wrongcount').innerHTML = wrong;
    }
    else {
        wrong++
        document.querySelector('#wrongcount').innerHTML = wrong;
    }
    var res = generator();
    if (radiancheck == 1) {
        if (randomInt(2) == 1) {
            document.querySelector('#function').innerHTML = `${res[0]}${radian[degree.indexOf(res[1])]})`;
        } else {
            document.querySelector('#function').innerHTML = `${res[0]}${res[1]})`;
        }
    } else {
        document.querySelector('#function').innerHTML = `${res[0]}${res[1]})`;
    }
    latestans = res[2];
    uniquecounter = 0;
    res = unique(res);
    if (uniquecounter != 0) {
        while (unique(res).length < 6) {
            res.push(value[randomInt(13)]);
        }
        res = unique(res)
    }
    res.shift(); res.shift();//Не забыть пофиксить
    shuffle(res);
    document.querySelectorAll('.ans').forEach(function (ans, i) {
        ans.innerHTML = res[i]
    })
}
output();