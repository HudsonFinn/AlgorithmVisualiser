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
    var infoTitle = document.createElement('h3');
    infoTitle.textContent = "Information";
    right.appendChild(infoTitle);
    var aboutSubTitle = document.createElement('h6');
    aboutSubTitle.textContent = "About";
    right.appendChild(aboutSubTitle);
		var aboutContent = document.createElement('p');
		aboutContent.textContent = "A comparison based very simple sorting algorithm."
		aboutContent.style.fontSize = "1rem"
		right.appendChild(aboutContent);
    var prosSubTitle = document.createElement('h6');
    prosSubTitle.textContent = "Pros";
    right.appendChild(prosSubTitle);
		var proContent = document.createElement('p');
		proContent.textContent = "Very simple to implement and understand";
		proContent.style.fontSize = "1rem"
		right.appendChild(proContent);
    var consSubTitle = document.createElement('h6');
    consSubTitle.textContent = "Cons";
    right.appendChild(consSubTitle);
		var conContent = document.createElement('p');
		conContent.textContent = "Has n^2 complexity";
		conContent.style.fontSize = "1rem"
		right.appendChild(conContent);
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
