var something = document.getElementById('bubbleCard');

something.style.cursor = 'pointer';
something.onclick = function() {
  if (openWindow != "bubbleSortWindow") {
    console.log(openWindow);
    openWindow = "bubbleSortWindow";
    console.log("Bubble Sort");
    var BubbleParentDiv = document.createElement('div');
    BubbleParentDiv.setAttribute('class', 'box stack-top');
    BubbleParentDiv.setAttribute('id', openWindow);
    console.log("created Window");
    var infoWindow = document.createElement('div');
    infoWindow.setAttribute('class', 'window');
    var left = document.createElement('div');
    left.setAttribute('class', 'right')
    var text = document.createElement('h3');
    text.textContent = "Bubble Sort";
    left.appendChild(text);
    var closeBtn = document.createElement("IMG");
    closeBtn.setAttribute("src", "start.png");
    closeBtn.setAttribute("width", "40");
    closeBtn.setAttribute("height", "40");
    closeBtn.setAttribute("onclick", "closeWindow()");
    left.appendChild(closeBtn);
    var right = document.createElement('div');
    right.setAttribute('class', 'right')
    var infoText = document.createElement('h3');
    infoText.textContent = "Information";
    right.appendChild(infoText);
    infoWindow.appendChild(left);
    infoWindow.appendChild(right);
    BubbleParentDiv.appendChild(infoWindow);
    document.body.appendChild(BubbleParentDiv);
  } else {
    console.log(openWindow);
    var window = document.getElementById(openWindow);
    console.log(window)
    window.remove();
    openWindow = "";
  }

};

function closeWindow() {
  var window = document.getElementById(openWindow);
  openWindow = "";
  window.remove();
}
