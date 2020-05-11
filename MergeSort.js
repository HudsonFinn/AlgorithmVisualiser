async function MergeSort(arrayToSort) {
  var n = arrayToSort.length;
  var workingArray = [...arrayToSort];
  await TopDownSplitMerge(workingArray, 0, n, arrayToSort);
  console.log(workingArray);
  //Start TopDownSplitMerge
}

async function TopDownSplitMerge(workingArray, iBegin, iEnd, arrayToSort) {
  if (iEnd - iBegin < 2) return;
  console.log("doing something");
  var iMiddle = Math.floor((iEnd + iBegin) / 2);
  await TopDownSplitMerge(arrayToSort, iBegin, iMiddle, workingArray);
  await TopDownSplitMerge(arrayToSort, iMiddle, iEnd, workingArray);
  await TopDownMerge(workingArray, iBegin, iMiddle, iEnd, arrayToSort);
  console.log(workingArray);
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
  }
}
