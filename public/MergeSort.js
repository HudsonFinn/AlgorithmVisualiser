async function mergeSort(arrayToSort, delay) {
  var n = arrayToSort.length;
  var workingArray = [...arrayToSort];
  await TopDownSplitMerge(workingArray, 0, n, arrayToSort, delay);
  var canvas = document.getElementById('mergeSort');
  var ctx = canvas.getContext('2d');
  finnishedCanvasRecolour(ctx, workingArray);
}

async function TopDownSplitMerge(workingArray, iBegin, iEnd, arrayToSort, delay) {
  mergeSortColour(arrayToSort, workingArray, 'mergeSort');
  if (iEnd - iBegin < 2) return;
  await checkStates();
  var iMiddle = Math.floor((iEnd + iBegin) / 2);
  await TopDownSplitMerge(arrayToSort, iBegin, iMiddle, workingArray, delay);
  await TopDownSplitMerge(arrayToSort, iMiddle, iEnd, workingArray, delay);
  await TopDownMerge(workingArray, iBegin, iMiddle, iEnd, arrayToSort, delay);
  mergeSortColour(arrayToSort, workingArray, 'mergeSort');
}

async function TopDownMerge(workingArray, iBegin, iMiddle, iEnd, arrayToSort, delay) {
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
    await checkStates();
    await mergeSortColour(arrayToSort, workingArray, 'mergeSort');
  }

}

async function mergeSortColour(list, list2, canvas) {
  var canvas = document.getElementById(canvas);
  var width = canvas.width;
  width = (width - list.length)/list.length;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    ctx.fillStyle = "rgba(0, 155, 0, 1)";
    ctx.fillRect(k * (width + 1), 0, width, list[k]);
    ctx.fillStyle = "rgba(0, 255, 0, 1)";
    ctx.fillRect(k * (width + 1), 0, width, list2[k])
  }
}
