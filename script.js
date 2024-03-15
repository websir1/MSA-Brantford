const registeredNames = ["usfer", "Mustafa", "Max"]; // Add all 30 names here

function checkRegistration() {
    const nameInput = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');
const glassSound = document.getElementById('glassSound');

    // Play the glass sound
    glassSound.play();

    if (registeredNames.includes(nameInput)) {
        resultDiv.innerHTML = '<span style="color: green;">Registered ✅</span>';
    } else {
        resultDiv.innerHTML = '<span style="color: red;">Not Registered ❌</span>';
    }
}
