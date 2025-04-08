let selectedColor = '';
document.getElementById('boxes').innerHTML = 
'<input class="color-box" type="text" onclick="colorBox(this)">'.repeat(126)+

'<div class="main-title">CLUE</div>'+
'<input class="playername" type="text">'+
'<input class="playername" type="text">'+
'<input class="playername" type="text">'+
'<input class="playername" type="text">'+
'<input class="playername" type="text">'+
'<input class="playername" type="text">'+

'<div class="section-title">SUSPECTS</div>'+
'<div class="choice">Colonel Mustard</div>'+
'<div class="choice">Professor Plum</div>'+
'<div class="choice">Reverend Green</div>'+
'<div class="choice">Mr. Peacock</div>'+
'<div class="choice">Miss Scarlet</div>'+
'<div class="choice">Mrs. White</div>'+

'<div class="section-title">WEAPONS</div>'+
'<div class="choice">Knife</div>'+
'<div class="choice">Candlestick</div>'+
'<div class="choice">Revolver</div>'+
'<div class="choice">Rope</div>'+
'<div class="choice">Lead Pipe</div>'+
'<div class="choice">Wrench</div>'+

'<div class="section-title">ROOMS</div>'+
'<div class="choice">Hall</div>'+
'<div class="choice">Lounge</div>'+
'<div class="choice">Dining Room</div>'+
'<div class="choice">Kitchen</div>'+
'<div class="choice">Ballroom</div>'+
'<div class="choice">Conservatory</div>'+
'<div class="choice">Billard Room</div>'+
'<div class="choice">Library</div>'+
'<div class="choice">Study</div>';

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