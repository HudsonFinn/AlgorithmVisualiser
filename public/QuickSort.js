async function lomutoQuickSortWrapper(list, delay) {
  await lomutoQuickSort(list, 0, list.length - 1, delay);
  var canvas = document.getElementById('quickSort');
  var ctx = canvas.getContext('2d');
  await finnishedCanvasRecolour(ctx, list);
}

async function lomutoQuickSort(list, lo, hi, delay) {
  if (lo < hi) {
    await checkStates();
    let p = await partition(list, lo, hi, delay);
    list = await lomutoQuickSort(list, lo, p - 1, delay);
    list = await lomutoQuickSort(list, p + 1, hi, delay);
  }

  return list;
}

async function partition(list, lo, hi, delay) {
  var canvas = document.getElementById('quickSort');
  var ctx = canvas.getContext('2d');
  var pivot = list[hi];
  var i = lo;
  for (var j = lo; j < hi; j++) {
    if (list[j] < pivot) {
      await checkStates();
      let baseIndex = list[i];
      list[i] = list[j];
      list[j] = baseIndex;
      i += 1;
      await checkStates();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      await quickSortColour(canvas, hi, lo, list, i, j);
    }
  }

  let baseIndex = list[i];
  list[i] = list[hi];
  list[hi] = baseIndex;
  await checkStates();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  await quickSortColour(canvas, hi, lo, list, i, j);
  return i;
}

async function quickSortColour(canvas, hi, lo, list, i, j) {
  var width = canvas.width;
  width = (width - list.length)/list.length;
	var height = canvas.height;
	var maxVal = Math.max.apply(Math, list);
	height = height/maxVal;
  ctx = canvas.getContext('2d');
  for (var k = 0; k < list.length; k++) {
    if ((k > hi) | (k < lo)) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    } else if ((k == i) | (k == j)) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    }
  }
}
