var unsortedList;
var delay;
var running;
var paused;
async function main() {
  console.log(delay);
  console.log(unsortedList);
  running = false;
  await sleep(10);
  running = true;
  paused = false;
  var secondUnsortedList = [...unsortedList];
  mergeSort(secondUnsortedList);
  var thirdUnsortedList = [...secondUnsortedList];
  lomutoQuickSortWrapper(thirdUnsortedList, delay);
  bubbleSort(unsortedList);
  var forthUnsortedList = [...secondUnsortedList];
  selectionSort(forthUnsortedList);
  var fifthUnsortedList = [...secondUnsortedList];
  insertionSort(fifthUnsortedList);
  var sixthUnsortedList = [...secondUnsortedList];
  shellSort(sixthUnsortedList);
  var seventhUnsortedList = [...secondUnsortedList];
  countSort(seventhUnsortedList);
  var eigthUnsortedList = [...secondUnsortedList];
  heapSort(eigthUnsortedList);
}

function createUnsortedList(len, min, max) {
  unsortedList = [];
  for (var i = 0; i < len; i++) {
    unsortedList[i] = getRndInt(min, max);
  }

  return unsortedList;
}

function changeDelay() {
  delay = parseInt(document.getElementById("delayRange").value);
}

function setup() {
  var min = parseInt(document.getElementById("minRange").value);
  var max = parseInt(document.getElementById("maxRange").value);
  var length = parseInt(document.getElementById("lengthRange").value);
  createUnsortedList(length, min, max);
  drawAllLists();
  loadAllScript();
}

function refreshLists() {
  if (running == false) {
    var min = parseInt(document.getElementById("minRange").value);
    var max = parseInt(document.getElementById("maxRange").value);
    var length = parseInt(document.getElementById("lengthRange").value);
    createUnsortedList(length, min, max);
    drawAllLists();
  }
}

function drawAllLists() {
  drawList('bubbleSort');
  drawList('quickSort');
  drawList('mergeSort');
  drawList('heapSort');
  drawList('selectionSort');
  drawList('insertionSort');
  drawList('shellSort');
  drawList('countSort');
}

function loadAllScript() {
  dynamicallyLoadScript("BubbleSort.js");
  dynamicallyLoadScript("QuickSort.js");
  dynamicallyLoadScript("MergeSort.js");
  dynamicallyLoadScript("HeapSort.js");
  dynamicallyLoadScript("SelectionSort.js");
  dynamicallyLoadScript("InsertionSort.js");
  dynamicallyLoadScript("ShellSort.js");
  dynamicallyLoadScript("CountSort.js");
}

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function resume() {
  paused = false;
}

function stop() {
  running = false;
}

function pause() {
  paused = true;
}

async function checkStates() {
  console.log("checkedStates")
  await checkPause();
  checkEnd();
  delay = parseInt(document.getElementById("delayRange").value);
  await sleep(delay);
}

async function checkPause() {
  console.log("checkedPause")
  checkEnd();
  if (paused == true) {
    await sleep(1);
    await checkPause();
  }
}

function checkEnd() {
  console.log("CheckedEnd")
  if (running == false) {
    throw "UserStoppedRun";
  }
}

function getRandomColour() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function drawList(canvas) {
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  width = (width - unsortedList.length)/unsortedList.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < unsortedList.length; k++) {
      ctx.fillStyle = getRandomColour();
      ctx.fillRect(k * (width + 1), 0, width, unsortedList[k]);
  }
}

async function finnishedCanvasRecolour(ctx, list) {
  // TODO: ClearRect
  var width = ctx.canvas.width;
  width = (width - list.length)/list.length;
  for (var j = 0; j < list.length; j++) {
    ctx.fillStyle = '#FFa500';
    ctx.fillRect(j * (width + 1), 0, width, list[j]);
    await sleep(1000/list.length);
  }

  for (var j = 0; j < list.length; j++) {
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(j * (width + 1), 0, width, list[j]);
    await sleep(1000/list.length);
  }

}