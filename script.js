// script.js
document.addEventListener('DOMContentLoaded', function() {
    const redInputRange = document.getElementById('red');
    const greenInputRange = document.getElementById('green');
    const blueInputRange = document.getElementById('blue');

    const redInputText = document.getElementById('redValue');
    const greenInputText = document.getElementById('greenValue');
    const blueInputText = document.getElementById('blueValue');
    
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const colorPicker = document.getElementById('colorPicker');

    function updateColor() {
        const r = parseInt(redInputRange.value);
        const g = parseInt(greenInputRange.value);
        const b = parseInt(blueInputRange.value);

        redInputText.value = r;
        greenInputText.value = g;
        blueInputText.value = b;

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor.toUpperCase();
        colorPicker.value = hexColor;
    }

    function syncRangeAndText(event) {
        const value = parseInt(event.target.value);
        if (event.target === redInputText) {
            redInputRange.value = value;
        } else if (event.target === greenInputText) {
            greenInputRange.value = value;
        } else if (event.target === blueInputText) {
            blueInputRange.value = value;
        }
        updateColor();
    }

    function syncColorPicker(event) {
        const hex = event.target.value;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        redInputRange.value = r;
        greenInputRange.value = g;
        blueInputRange.value = b;

        redInputText.value = r;
        greenInputText.value = g;
        blueInputText.value = b;

        updateColor();
    }

    redInputRange.addEventListener('input', updateColor);
    greenInputRange.addEventListener('input', updateColor);
    blueInputRange.addEventListener('input', updateColor);

    redInputText.addEventListener('input', syncRangeAndText);
    greenInputText.addEventListener('input', syncRangeAndText);
    blueInputText.addEventListener('input', syncRangeAndText);

    colorPicker.addEventListener('input', syncColorPicker);

    // Initialize color
    updateColor();
});





