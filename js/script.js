function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    switch (unit) {
        case 'celsius':
            result = temperature;
            break;
        case 'fahrenheit':
            result = (temperature * 9/5) + 32;
            break;
        case 'kelvin':
            result = temperature + 273.15;
            break;
        default:
            result = 'Ungültige Einheit';
    }

    document.getElementById('result').textContent = `Ergebnis: ${result.toFixed(2)} ${unit}`;
}