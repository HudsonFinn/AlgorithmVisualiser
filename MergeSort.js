async function mergeSort(arrayToSort) {
  var n = arrayToSort.length;
  var workingArray = [...arrayToSort];
  await TopDownSplitMerge(workingArray, 0, n, arrayToSort);
}

async function TopDownSplitMerge(workingArray, iBegin, iEnd, arrayToSort) {
  if (iEnd - iBegin < 2) return;
  var iMiddle = Math.floor((iEnd + iBegin) / 2);
  await TopDownSplitMerge(arrayToSort, iBegin, iMiddle, workingArray);
  await TopDownSplitMerge(arrayToSort, iMiddle, iEnd, workingArray);
  await TopDownMerge(workingArray, iBegin, iMiddle, iEnd, arrayToSort);
  mergeSortColour(arrayToSort, 'mergeSort');
  mergeSortColour(workingArray, 'mergeSortOriginal');
  await sleep(500);
}

async function TopDownMerge(arrayToSort, iBegin, iMiddle, iEnd, workingArray) {
  i = iBegin;
  j = iMiddle;
  for (k = iBegin; k < iEnd; k++) {
    if (i < iMiddle && (j >= iEnd || arrayToSort[i] <= arrayToSort[j])) {
      workingArray[k] = arrayToSort[i];
      i = i + 1;
    } else {
      workingArray[k] = arrayToSort[j];
      j = j + 1;
    }

    mergeSortColour(arrayToSort, 'mergeSort');
    mergeSortColour(workingArray, 'mergeSortOriginal');
    await sleep(500);
  }

}

async function mergeSortColour(list, canvas) {
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(k * 20, 0, 10, list[k]);
  }
}
