let selectedColor = '';
document.getElementById('boxes').innerHTML = '<div class="color-box" onclick="colorBox(this)"></div>'.repeat(105);

// Function to set the selected color
function setColor(color) {
    selectedColor = color;
}

// Function to change the color of the box
function colorBox(box) {
    if (selectedColor) {
        box.style.backgroundColor = selectedColor;
    }
}