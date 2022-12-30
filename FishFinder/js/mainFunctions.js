
var lastButtonEntry = "all";
var activeFilters = [];
filterSelection("all")


function filterSelection(c) {
  //Append all Clicked to a List
  if (c != "all") {
    buttonPushed = document.getElementById(c);
    if (buttonPushed.classList.contains("active")==false) {
      w3AddClass(document.getElementById(c), "active");
      activeFilters.push(c);
    }
    else {
      w3RemoveClass(buttonPushed, "active");
      cIndex = activeFilters.indexOf(c);
      activeFilters.splice(cIndex, 1)
    }
    console.log(activeFilters);
  }
  console.log(activeFilters.length)
  filterSelection2(c);
}

function checkAllTags(xi) {
  var tagsInElement = 0;
  for (i = 0; i < activeFilters.length; i++) {
    if (xi.className.indexOf(activeFilters[i]) > -1) tagsInElement++;
  }
  if (tagsInElement == activeFilters.length) return true; //posibility for bug
  return false;
}


function filterSelection2(c) {
  // Store Last Click for CheckMark Updates
  if (c == "useLast") c = lastButtonEntry;
  lastButtonEntry = c;
  if (c == "all") c = "";

  var x, i, s4, hP, sT;

  // Check Toggle on Checkboxes
  x = document.getElementsByClassName("filterDiv");
  s4 = document.getElementById('hide4seasons'); s4 = s4.checked;
  hP = document.getElementById('hidePot'); hP = hP.checked;
  sT = document.getElementById('showTimes'); sT = sT.checked;

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
  }
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    if (checkAllTags(x[i])) w3AddClass(x[i], "show");
    // Below Lines Remove Divs Based on Checkbox Toggles
    if (x[i].classList.contains("spring") & x[i].classList.contains("summer") & x[i].classList.contains("fall") & x[i].classList.contains("winter") & s4) w3RemoveClass(x[i], "show");
    if ((x[i].classList.contains("pot") || x[i].classList.contains("plant"))  & hP) w3RemoveClass(x[i], "show");
    if (x[i].classList.contains("time") & !sT) w3AddClass(x[i], "fullHide");
    if (x[i].classList.contains("time") & sT) w3RemoveClass(x[i], "fullHide");
    if (x[i].classList.contains("time") & !x[i].classList.contains("show")) w3AddClass(x[i], "fullHide");
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

function clearFilters() {
  x = document.getElementsByClassName("btn");
  for (i = 0; i < x.length; i++) {   
    w3RemoveClass(x[i], "active");
    cIndex = activeFilters.indexOf(x[i]);
    activeFilters.splice(cIndex, 1)
  }

  y = document.getElementsByClassName("switch");
  for (i = 0; i < y.length; i++) {   
      y[i].checked = false;
    }
}

