async function bubbleSort(list, canvas) {
  var lastSortedLen = list.length;
  var comparisons = 0;
  var swaps = 0;
  var ctx = canvas.getContext('2d');
  var tempLastSortedLen = 0;
  ctx.fillStyle = '#FF0000';
  do {
    tempLastSortedLen = 0;
    for (var i = 0; i < lastSortedLen - 1; i++) {
      comparisons += 1;
      if (list[i] > list[i + 1]) {
        swaps += 1;
        tempLastSortedLen = i + 1;
        let baseIndex = list[i];
        list[i] = list[i + 1];
        list[i + 1] = baseIndex;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var j = 0; j < list.length; j++) {
        if (j == i | j == i + 1) {
          ctx.fillStyle = '#FFa500';
          ctx.fillRect(j * 20, 0, 10, list[j]);
        } else if (j >= lastSortedLen) {
          ctx.fillStyle = '#00FF00';
          ctx.fillRect(j * 20, 0, 10, list[j]);
        } else {
          ctx.fillStyle = '#FF0000';
          ctx.fillRect(j * 20, 0, 10, list[j]);
        }
      }

      await sleep(500);
    }

    lastSortedLen = tempLastSortedLen;
  } while (lastSortedLen > 1);

  finnishedCanvasRecolour(ctx, list);
  console.log('Comparsions: ' + comparisons);
  console.log('Swaps: ' + swaps);
  return list;
}
