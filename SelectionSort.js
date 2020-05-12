async function selectionSort(list, canvas) {
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    let min = 100000000;
    let highestIndex = 0;
    for (var j = i; j < list.length; j++) {
      if (list[j] <= min) {
        await sleep(100);
        highestIndex = j;
        min = list[j];
      }

      selectionSortColour(list, i, j);
      await sleep(100);
    }

    let swap = list[i];
    list[i] = list[highestIndex];
    list[highestIndex] = swap;
  }

  /*
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
*/
  var canvas = document.getElementById('selectionSort');
  var ctx = canvas.getContext('2d');
  finnishedCanvasRecolour(ctx, list);
  /*
  console.log('Comparsions: ' + comparisons);
  console.log('Swaps: ' + swaps);
  return list;
  */
}

async function selectionSortColour(list, i, j) {
  var canvas = document.getElementById('selectionSort');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k <= i) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    } else if (k == j) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    }
  }
}
