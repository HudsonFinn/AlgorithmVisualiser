async function bubbleSort(list, delay) {
  var lastSortedLen = list.length;
  var comparisons = 0;
  var swaps = 0;
  var canvas = document.getElementById('bubbleSort');
  var ctx = canvas.getContext('2d');
  var tempLastSortedLen = 0;
  ctx.fillStyle = '#FF0000';
  var width = canvas.width;
  width = (width - list.length)/list.length;
	var height = ctx.canvas.height;
	var maxVal = Math.max.apply(Math, list);
	height = height/maxVal;
  do {
    tempLastSortedLen = 0;
    for (var i = 0; i < lastSortedLen - 1; i++) {
      comparisons += 1;
      if (list[i] > list[i + 1]) {
        await checkStates();
        swaps += 1;
        tempLastSortedLen = i + 1;
        let baseIndex = list[i];
        list[i] = list[i + 1];
        list[i + 1] = baseIndex;
        await checkStates();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var j = 0; j < list.length; j++) {
        if (j == i | j == i + 1) {
          ctx.fillStyle = '#FFa500';
          ctx.fillRect(j * (width + 1), 0, width, list[j]*height);
        } else if (j >= lastSortedLen) {
          ctx.fillStyle = '#00FF00';
          ctx.fillRect(j * (width + 1), 0, width, list[j]*height);
        } else {
          ctx.fillStyle = '#FF0000';
          ctx.fillRect(j * (width + 1), 0, width, list[j]*height);
        }
      }
    }

    lastSortedLen = tempLastSortedLen;
  } while (lastSortedLen > 1);

  await finnishedCanvasRecolour(ctx, list);
  console.log('Comparsions: ' + comparisons);
  console.log('Swaps: ' + swaps);
  return list;
}
