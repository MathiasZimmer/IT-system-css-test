const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware til at parse JSON-data
app.use(bodyParser.json());

// Endpoint for at modtage måltidsregistrering
app.post('/registerMeal', (req, res) => {
    const { name, isMealRegistered } = req.body;

    // Her kan du tilføje logik til at gemme data i en database eller udføre yderligere behandling
    console.log('Modtaget data - Navn: ' + name + ', Får mad: ' + isMealRegistered);

    // Send en bekræftelsesmeddelelse tilbage til klienten
    res.json({ message: 'Måltid registreret med succes!' });
});

// Start serveren
app.listen(PORT, () => {
    console.log(`Server kører på http://localhost:${PORT}`);
});
