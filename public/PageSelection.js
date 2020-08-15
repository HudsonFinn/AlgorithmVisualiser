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
		var creditText = document.createElement('p');
		creditText.textContent = "Credit: HackerRank youtube channel, https://www.youtube.com/c/HackerrankOfficial/featured"
		creditText.style.fontSize = "1rem"
		left.innerHTML = `<iframe style="overflow:hidden;width:90%;height:40%"src="https://www.youtube.com/embed/6Gv8vg0kcHc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    left.prepend(text);
		left.appendChild(creditText);

		var closeDiv = document.createElement('div');
    var closeBtn = document.createElement("IMG");
    closeBtn.setAttribute("src", "start.png");
    closeBtn.setAttribute("width", "40");
    closeBtn.setAttribute("height", "40");
    closeBtn.setAttribute("onclick", "closeWindow()");
    closeDiv.appendChild(closeBtn);
    var right = document.createElement('div');
    right.setAttribute('class', 'right')
    var infoText = document.createElement('h3');
    infoText.textContent = "Information";
    right.appendChild(infoText);
    infoWindow.appendChild(left);
    infoWindow.appendChild(right);
		infoWindow.appendChild(closeDiv);
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
