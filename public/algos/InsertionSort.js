async function insertionSort(list) {
  for (var i = 0; i < list.length; i++) {
    for (var j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        await checkStates();
        let swap = list[j];
        list[j] = list[j - 1];
        list[j - 1] = swap;
        insertionSortColour(list, i, j);
        await checkStates();
      }

    }

  }

  var canvas = document.getElementById('insertionSort');
  var ctx = canvas.getContext('2d');
  await finnishedCanvasRecolour(ctx, list);
}


async function insertionSortColour(list, i, j) {
  var canvas = document.getElementById('insertionSort');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  width = (width - list.length)/list.length;
	var height = ctx.canvas.height;
	var maxVal = Math.max.apply(Math, list);
	height = height/maxVal;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k == j-1) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    } else if (k <= i) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    }
  }
}
