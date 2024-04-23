
function registerMeal() {
    var name = document.getElementById('name').value;
    var mealCheckbox = document.getElementById('meal');
    var isMealRegistered = mealCheckbox.checked;

    // Send data til serveren
    fetch('http://localhost:3000/registerMeal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            isMealRegistered: isMealRegistered,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server svar:', data.message);
    })
    .catch(error => {
        console.error('Fejl ved registrering af måltid:', error);
    });

    // Nulstil formular
    document.getElementById('registrationForm').reset();
}
