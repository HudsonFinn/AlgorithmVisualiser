function main() {
  var unsortedList = createUnsortedList(15);
  console.log(unsortedList);
  var secondUnsortedList = [...unsortedList];
  mergeSort(secondUnsortedList);
  var thirdUnsortedList = [...secondUnsortedList];
  console.log(thirdUnsortedList);
  lomutoQuickSortWrapper(thirdUnsortedList, 0, thirdUnsortedList.length - 1);
  var canvas = document.getElementById('myCanvas');
  semiSortedList = bubbleSort(unsortedList, canvas);
  var forthUnsortedList = [...secondUnsortedList];
  selectionSort(forthUnsortedList);
}

function createUnsortedList(len) {
  var unsortedList = [];
  for (var i = 0; i < len; i++) {
    unsortedList[i] = getRndInt(1, 100);
  }

  return unsortedList;
}

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function finnishedCanvasRecolour(ctx, list) {
  for (var j = 0; j < list.length; j++) {
    ctx.fillStyle = '#FFa500';
    ctx.fillRect(j * 20, 0, 10, list[j]);
    await sleep(20);
  }

  for (var j = 0; j < list.length; j++) {
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(j * 20, 0, 10, list[j]);
    await sleep(20);
  }

}
