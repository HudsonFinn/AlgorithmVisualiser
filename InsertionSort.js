async function insertionSort(list) {
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    for (var j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        await sleep(100);
        let swap = list[j];
        list[j] = list[j - 1];
        list[j - 1] = swap;
        insertionSortColour(list, i, j);
        await sleep(100);
      }

    }

  }

  var canvas = document.getElementById('insertionSort');
  var ctx = canvas.getContext('2d');
  finnishedCanvasRecolour(ctx, list);
  /*
  console.log('Comparsions: ' + comparisons);
  console.log('Swaps: ' + swaps);
  return list;
  */
}

async function insertionSortColour(list, i, j) {
  var canvas = document.getElementById('insertionSort');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k == j) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    } else if (k <= i) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    }
  }
}
