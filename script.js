let celsiousInput = document.getElementById("celsiusId");
let fahrenheitInput = document.getElementById("fahrenheitId");
let kelvinInput = document.getElementById("kelvinId");
let allclearE = document.getElementById("allclear")

celsiousInput.addEventListener('input', function() {
    let cTemp = parseFloat(celsiousInput.value);
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;

})

fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5 / 9)
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15

    celsiousInput.value = cTemp;
    kelvinInput.value = kTemp;

})

kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

    celsiousInput.value = cTemp;
    fahrenheitInput.value = fTemp;

})

allclearE.addEventListener("click", function() {
    celsiousInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";


})