var userLang = navigator.language || navigator.userLanguage;
var ids = ['table-button', 'tgctgcheck', 'radiancheck', 'irreg', 'correct', 'wrong']

var en = {
    'table-button': 'Table',
    'tgctgcheck': 'Tangent/cotangent',
    'radiancheck': 'Radian',
    'irreg': 'Irregular',
    'correct': 'Correct',
    'wrong': 'Wrong',
}

var ru = {
    'table-button': 'Таблица',
    'tgctgcheck': 'Тангенс/Котангенс',
    'radiancheck': 'Радианы',
    'irreg': 'Нестандартные значения',
    'correct': 'Правильно',
    'wrong': 'Неверно',
}

switch (userLang) {
    case 'en': 
        ids.forEach(el => {
            document.getElementById(el).innerHTML = en[el]
        })
        break;
    case 'ru':
        ids.forEach(el => {
            document.getElementById(el).innerHTML = ru[el]
        })
}