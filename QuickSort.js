async function lomutoQuickSortWrapper(list, lo, hi) {
  await lomutoQuickSort(list, lo, hi);
  var canvas = document.getElementById('quickSort');
  var ctx = canvas.getContext('2d');
  finnishedCanvasRecolour(ctx, list);
}

async function lomutoQuickSort(list, lo, hi) {
  if (lo < hi) {
    let p = await partition(list, lo, hi);
    list = await lomutoQuickSort(list, lo, p - 1);
    list = await lomutoQuickSort(list, p + 1, hi);
  }

  return list;
}

async function partition(list, lo, hi) {
  var canvas = document.getElementById('quickSort');
  var ctx = canvas.getContext('2d');
  var pivot = list[hi];
  var i = lo;
  for (var j = lo; j < hi; j++) {
    if (list[j] < pivot) {
      let baseIndex = list[i];
      list[i] = list[j];
      list[j] = baseIndex;
      i += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      await quickSortColour(ctx, hi, lo, list, i, j);
      await sleep(500);
    }
  }

  let baseIndex = list[i];
  list[i] = list[hi];
  list[hi] = baseIndex;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  await quickSortColour(ctx, hi, lo, list, i, j);
  await sleep(500);
  return i;
}

async function quickSortColour(ctx, hi, lo, list, i, j) {
  for (var k = 0; k < list.length; k++) {
    if ((k > hi) | (k < lo)) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    } else if ((k == i) | (k == j)) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * 20, 0, 10, list[k]);
    }
  }
}
