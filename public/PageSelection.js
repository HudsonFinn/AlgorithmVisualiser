var cards = document.getElementsByClassName('card');

function cardClick(clicked) {
  if (openWindow == "") {
		openWindow = clicked;
    var BubbleParentDiv = document.createElement('div');
    BubbleParentDiv.setAttribute('class', 'box stack-top');
    BubbleParentDiv.setAttribute('id', 'window');
    console.log("created Window");

    var infoWindow = document.createElement('div');
    infoWindow.setAttribute('class', 'window');

    var left = document.createElement('div');
		left.style.borderRight = "0.5px solid grey";
    left.setAttribute('class', 'right')
    var text = document.createElement('h3');
    text.textContent = algos[openWindow].name;
		var creditText = document.createElement('p');
		creditText.textContent = "Credit: HackerRank youtube channel, " + algos[openWindow].video.credit;
		creditText.style.fontSize = "1rem";
		left.innerHTML = `<iframe style="overflow:hidden;width:100%;height:45%"src=${algos[openWindow].video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    left.prepend(text);
		left.appendChild(creditText);

    var right = document.createElement('div');
    right.setAttribute('class', 'right')
    var infoTitle = document.createElement('h3');
    infoTitle.textContent = "Information";
    right.appendChild(infoTitle);
    var aboutSubTitle = document.createElement('h6');
    aboutSubTitle.textContent = "About";
    right.appendChild(aboutSubTitle);
		var aboutContent = document.createElement('p');
		aboutContent.textContent = algos[openWindow].info.about
		aboutContent.style.fontSize = "1rem"
		right.appendChild(aboutContent);
    var prosSubTitle = document.createElement('h6');
    prosSubTitle.textContent = "Pros";
    right.appendChild(prosSubTitle);
		var proContent = document.createElement('p');
		proContent.setAttribute('style', 'white-space: pre;');
		proContent.textContent = algos[openWindow].info.pros;
		proContent.style.fontSize = "1rem"
		right.appendChild(proContent);
    var consSubTitle = document.createElement('h6');
    consSubTitle.textContent = "Cons";
    right.appendChild(consSubTitle);
		var conContent = document.createElement('p');
		conContent.textContent = algos[openWindow].info.cons;
		conContent.style.fontSize = "1rem"
		right.append(conContent);

		var closeDiv = document.createElement('div');
		closeDiv.setAttribute('class', 'exitButton');
    var closeBtn = document.createElement("IMG");
    closeBtn.setAttribute("src", "close.PNG");
    closeBtn.setAttribute("width", "40");
    closeBtn.setAttribute("height", "40");
    closeBtn.setAttribute("onclick", "closeWindow()");
    closeDiv.appendChild(closeBtn);

    infoWindow.appendChild(left);
    infoWindow.appendChild(right);
		infoWindow.appendChild(closeDiv);
    BubbleParentDiv.appendChild(infoWindow);
    document.body.appendChild(BubbleParentDiv);
  } else {
    console.log(openWindow);
    var window = document.getElementById('window');
    window.remove();
    openWindow = "";
  }

};


function closeWindow() {
  var window = document.getElementById('window');
  openWindow = "";
  window.remove();
}
