let bmi;
const btn = document.querySelector(".btn");
const contentOutput = document.querySelector(".content-output ");
const cmHidden = document.querySelector(".cm");
const kgHidden = document.querySelector(".kg");
const wynik = document.querySelector(".wynik");
const resultPointer = document.querySelector(".result-pointer")
const result = document.querySelector("#result");

cmHidden.addEventListener("click", () => {
  contentOutput.classList.add("hidden");
});

kgHidden.addEventListener("click", () => {
  contentOutput.classList.add("hidden");
});

btn.addEventListener("click", () => {
  const cm = document.querySelector(".cm").value;
  const kg = document.querySelector(".kg").value;
  bmi = kg / (cm / 100) ** 2;
  result.innerHTML = parseFloat(bmi).toFixed(2);
  resultPointer.value = parseFloat(bmi).toFixed(2);

  if (parseFloat(cm) >= 125 && parseFloat(kg) >= 25 && parseFloat(cm) <= 250 && parseFloat(kg) <= 250) {
    contentOutput.classList.remove("hidden");
  } else {
    alert(
      "Minimalny wzrost musi być 125 cm oraz minimalna waga 25 kg dla prawidłowego wyniku. Przy tym maksymalne wskaźniki mogą być: 250 cm oraz 250 kg"
    );
    contentOutput.classList.remove("add");
  }
  
  if (parseFloat(bmi) < 16) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>WYGŁODZENIE</strong>, jak ty żyjesz? Koniecznie musisz nabrać wagę!";
  } else if (parseFloat(bmi) >= 16 && parseFloat(bmi) <= 16.99) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>WYCHUDZENIE</strong>, koniecznie musisz nabrać wagę!";
  } else if (parseFloat(bmi) >= 17 && parseFloat(bmi) <= 18.49) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>NIEDOWAGA</strong>, należałoby nabrać wagę!";
  } else if (parseFloat(bmi) >= 18.5 && parseFloat(bmi) <= 24.99) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OPTIMUM</strong>, z tobą wszystko w pożądku (^_^)";
  } else if (parseFloat(bmi) >= 25 && parseFloat(bmi) <= 29.99) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>NADWAGA</strong>, należałoby troche schudnąć (-_-)";
  } else if (parseFloat(bmi) >= 30 && parseFloat(bmi) <= 34.99) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OTYŁOŚĆ 1st.</strong>, polecamy wykupienie abonamentu do fitnes klubu =)";
  } else if (parseFloat(bmi) >= 35 && parseFloat(bmi) <= 39.99) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OTYŁOŚĆ 2st.</strong>, koniecznie musisz schudnąć!";
  } else if (parseFloat(bmi) >= 40) {
    wynik.innerHTML =
      "Interpretacja twojego wyniku: <strong>OTYŁOŚĆ 3st.</strong>, jak ty żyjesz? Koniecznie musisz schudnąć!";
  }
});
