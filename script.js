document.getElementById("sumBtn").addEventListener("click", sum);

function sum() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Помилка: Введіть два числа!";
    resultDiv.style.color = "red";
  } else {
    resultDiv.textContent = "Результат: " + (a + b);
    resultDiv.style.color = "#222";
  }
}
