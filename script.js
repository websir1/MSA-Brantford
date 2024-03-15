const registeredNames = ["usfer", "Mustafa", "Max"]; // Add all 30 names here

function checkRegistration() {
    const nameInput = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');

    if (registeredNames.includes(nameInput)) {
        resultDiv.innerHTML = '<span style="color: green;">Registered ✅</span>';
    } else {
        resultDiv.innerHTML = '<span style="color: red;">Not Registered ❌</span>';
    }
}
