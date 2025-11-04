function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = " Podaj obie liczby!";
    return;
  }

  let calc;
  switch (operator) {
    case '+':
      calc = num1 + num2;
      break;
    case '-':
      calc = num1 - num2;
      break;
    case '*':
      calc = num1 * num2;
      break;
    case '/':
      calc = num2 !== 0 ? num1 / num2 : "Nie można dzielić przez 0!";
      break;
  }

  result.textContent = `Wynik: ${calc}`;
}
