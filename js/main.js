function toggleFuse(timeout) {
  if (switchedOn) {
    var color1 = new GColor(251, 175, 64);
    var color2 = new GColor(255, 255, 255);
    switchedOn = false;
  } else {
    var color1 = new GColor(255, 255, 255);
    var color2 = new GColor(251, 175, 64);
    switchedOn = true;
  }

  var range = createColorRange(color1, color2);
  var pointer = 0;

  function rotateColors() {
      timeout = (typeof timeout === 'undefined')?1:timeout;
      var currentColor = range[pointer];
      fuseBulb.style.fill = "rgb("+currentColor.r+","+currentColor.g+","+currentColor.b+")";
      pointer++;
      if (pointer < range.length) window.setTimeout(rotateColors, timeout);
  };

  rotateColors()
};

var GColor = function(r,g,b) {
    r = (typeof r === 'undefined')?0:r;
    g = (typeof g === 'undefined')?0:g;
    b = (typeof b === 'undefined')?0:b;
    return {r:r, g:g, b:b};
};

var createColorRange = function(c1, c2) {
    var colorList = [], tmpColor;
    for (var i=0; i<255; i++) {
        tmpColor = new GColor();
        tmpColor.r = c1.r + ((i*(c2.r-c1.r))/255);
        tmpColor.g = c1.g + ((i*(c2.g-c1.g))/255);
        tmpColor.b = c1.b + ((i*(c2.b-c1.b))/255);
        colorList.push(tmpColor);
    }
    return colorList;
}

var logo = document.querySelector('.logo');
var fuseBulb = document.getElementsByClassName('st1')[0];
var switchedOn = false;

logo.addEventListener('click', toggleFuse);

toggleFuse(10);

particlesJS.load('particles-js', 'js/particles.json');
