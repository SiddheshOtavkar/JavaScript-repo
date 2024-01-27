const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;
    // results.innerHTML = `<p></p>`
    if(bmi < 18.6) {
        results.innerHTML = `<p>You are under weight ${bmi}</p>`
    } else if(18.6 < bmi && bmi < 24.9) {
        results.innerHTML = `<p>You are in normal range ${bmi}</p>`
    } else {
        results.innerHTML = `<p>You are overweight ${bmi}</p>`
    }
  }
});
