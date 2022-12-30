filterSelection("all")
var lastButtonEntry = "all"

function filterSelection(c) {
  if (c == "useLast") c = lastButtonEntry;
  lastButtonEntry = c;
  var x, i, s4;
  x = document.getElementsByClassName("filterDiv");
  s4 = document.getElementById('hide4seasons'); s4 = s4.checked;
  hP = document.getElementById('hidePot'); hP = hP.checked;
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    // Below Line Removes if they are contained in all 4 seasons
    if (x[i].classList.contains("spring") & x[i].classList.contains("summer") & x[i].classList.contains("fall") & x[i].classList.contains("winter") & s4) w3RemoveClass(x[i], "show");
    if ((x[i].classList.contains("pot") || x[i].classList.contains("plant"))  & hP) w3RemoveClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("buttonFrame");
console.log(btnContainer);
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}