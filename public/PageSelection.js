var something = document.getElementById('bubbleCard');

something.style.cursor = 'pointer';
something.onclick = function() {
  if (openWindow != "bubbleSort") {
    console.log(openWindow);
    openWindow = "bubbleSort";
    console.log("Bubble Sort");
    var BubbleParentDiv = document.createElement('div');
    BubbleParentDiv.setAttribute('class', 'box stack-top');
    BubbleParentDiv.setAttribute('id', 'window');
    console.log("created Window");
    var window = document.createElement('div');
    window.setAttribute('class', 'window');
    var text = document.createElement('p');
    text.textContent = "This";
    window.appendChild(text);
    BubbleParentDiv.appendChild(window);
    document.body.appendChild(BubbleParentDiv);
  } else {
    var window = document.getElementById('window');
    window.remove();
    openWindow = "";
  }

};
