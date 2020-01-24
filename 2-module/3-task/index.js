let calculator = {
  read: function (a, b) {
    calculator["number1"] = a;
    calculator["number2"] = b;
  },
  sum: function () {
    return calculator["number1"] +  calculator["number2"];
  },
  mul: function () {
    return calculator["number1"] *  calculator["number2"];
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
