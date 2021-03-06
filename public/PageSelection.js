var cards = document.getElementsByClassName('card');

function cardClick(clicked) {
  if (openWindow == "") {
		openWindow = clicked;
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		console.log("Your screen width is " + width + " and your height is " + height);
    var BubbleParentDiv = document.createElement('div');
    BubbleParentDiv.setAttribute('class', 'box stack-top');
    BubbleParentDiv.setAttribute('id', 'window');
    console.log("created Window");

    var infoWindow = document.createElement('div');
    infoWindow.setAttribute('class', 'window info');

    var left = document.createElement('div');
    left.setAttribute('class', 'right')
		if (height >= width) {
			left.setAttribute('class', 'vertical')
		}
		left.style.overflow = "auto"
    var text = document.createElement('h3');
    text.textContent = algos[openWindow].name;
		var creditText = document.createElement('p');
		creditText.textContent = "Credit: HackerRank youtube channel, " + algos[openWindow].video.credit;
		creditText.style.fontSize = "1rem";
		left.innerHTML = `<iframe style="overflow:hidden;width:100%;height:45%"src=${algos[openWindow].video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    left.prepend(text);
		left.appendChild(creditText);

    var right = document.createElement('div');
    right.setAttribute('class', 'right');
		right.style.overflow = 'auto';
		if (height >= width) {
			right.setAttribute('class', 'vertical')
		}
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
    var propertiesSubTitle = document.createElement('h6');
    propertiesSubTitle.textContent = "Properties";
    right.appendChild(propertiesSubTitle);
		var properties = algos[openWindow].info.properties
		var propertiesContentDiv = document.createElement('div');
		propertiesContentDiv.innerHTML = `<table class="tg">
			<thead>
			  <tr>
			    <th class="tg-7x22">IN-PLACE</th>
			    <th class="tg-7x22">STABLE</th>
			    <th class="tg-7x22">BEST</th>
			    <th class="tg-7x22">AVERAGE</th>
			    <th class="tg-7x22">WORST</th>
					<th class="tg-7x22">SPACE</th>
			  </tr>
			</thead>
			<tbody>
			  <tr>
			    <td class="tg-r25x">${properties.inPlace}</td>
			    <td class="tg-r25x">${properties.stable}</td>
			    <td class="tg-r25x">${properties.best}</td>
			    <td class="tg-r25x">${properties.average}</td>
			    <td class="tg-r25x">${properties.worst}</td>
			    <td class="tg-r25x">${properties.space}</td>
			  </tr>
			</tbody>
			</table>`;
		right.append(propertiesContentDiv);
    var usesSubTitle = document.createElement('h6');
    usesSubTitle.textContent = "Use case";
    right.appendChild(usesSubTitle);
		var usesContent = document.createElement('p');
		usesContent.textContent = algos[openWindow].info.use;
		usesContent.style.fontSize = "1rem"
		right.appendChild(usesContent);
		var disclaimerContent = document.createElement('p');
		disclaimerContent.textContent = algos[openWindow].info.disclaimer;
		disclaimerContent.style.fontSize = "1rem"
		right.appendChild(disclaimerContent);

		var closeDiv = document.createElement('div');
		closeDiv.setAttribute('class', 'exitButton');
    var closeBtn = document.createElement("IMG");
    closeBtn.setAttribute("src", "./media/close.png");
    closeBtn.setAttribute("width", "40");
    closeBtn.setAttribute("height", "40");
    closeBtn.setAttribute("onclick", "closeWindow()");
    closeDiv.appendChild(closeBtn);

		if (height >= width) {
	    infoWindow.appendChild(left);
			infoWindow.appendChild(closeDiv);
	    infoWindow.appendChild(right);
		} else {
	    infoWindow.appendChild(left);
	    infoWindow.appendChild(right);
			infoWindow.appendChild(closeDiv);
		}
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
