/* Find GET parameter by parameter name */
function findGetParameter(parameterName) {
  var result = null, tmp = [];
  var items = location.search.substr(1).split("&");
  
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName)
      result = decodeURIComponent(tmp[1]);
  }
  
  return result;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleRespMenu() {
  var x = document.getElementById("theTopmenu");
  if (x.className === "topmenu") {
    x.className += " responsive";
  } else {
    x.className = "topmenu";
  }
}

/* Check enable/disable layers */
function checkLayerCheckbox(whichLayer) {
  if (typeof map == 'undefined') {
    return;
  }
  var box;
  switch (whichLayer) {
    case 0:
      box = document.getElementById('trafficbox');
      if (box.checked) {
        trafficLayer.setMap(map);
      } else {
        trafficLayer.setMap(null);
      }
      break;
    case 1:
      box = document.getElementById('residentsbox');
      if (box.checked) {
        residentsLayer.setMap(map);
        zonesLayer.setMap(map);
      } else {
        residentsLayer.setMap(null);
        zonesLayer.setMap(null);
      }
      break;
    case 2:
      box = document.getElementById('visitorsbox');
      if (box.checked) {
        visitorsLayer.setMap(map);
      } else {
        visitorsLayer.setMap(null);
      }
      break;
    case 3:
      box = document.getElementById('kiosksbox');
      if (box.checked) {
        kiosksLayer.setMap(map);
      } else {
        kiosksLayer.setMap(null);
      }
      break;
    default:
  }

}

/* Disable layerboxes when clicked outside */
function toggleLayerbox(whichlayer) {
  if (!is_touch_device()) {
    return;
  }
  var i;
  var box = document.getElementById(whichlayer);
  if (box.style.left == "-202px" || !box.style.left) {
    closeLayerboxes();
    box.style.left = "0px";
  } else if (box.style.left == "0px") {
    box.style.left = "-202px";
  }
}

function forceCloseLayerboxes() {
  var boxes = document.getElementsByClassName("layerbox");
  var i;
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.left = "-202px";
  }
}

function closeLayerboxes() {
  if (!is_touch_device()) {
    return;
  }
  forceCloseLayerboxes();
}

function is_touch_device() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

function showSnackbar(whichId) {
  var x = document.getElementById(whichId)
  x.className = "snackbar show";
  setTimeout(function() {
               x.className = x.className.replace("snackbar show", "snackbar");
             }, 3000);
}

function toggleAccordion() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}
