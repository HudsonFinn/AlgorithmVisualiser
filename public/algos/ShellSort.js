async function shellSort(list, delay) {
  var n = list.length;

  for (var gap = n/2; gap > 0; gap /= 2) {
    gap = Math.floor(gap);
    for (var i = gap; i < n; i++) {
      var temp = list[i];
      var j = 0;
      for (j = i; j >= gap && list[j - gap] > temp; j -= gap) {
        await checkStates();
        await checkStates();
        list[j] = list [j - gap];
        shellSortColour(list, i, j-gap)
      }

      list[j] = temp;
      shellSortColour(list, i, j-gap)
      await checkStates();
    }
  }
  var canvas = document.getElementById('shellSort');
  var ctx = canvas.getContext('2d');
  await finnishedCanvasRecolour(ctx, list);
  }

async function shellSortColour(list, i, j) {
  var canvas = document.getElementById('shellSort');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  width = (width - list.length)/list.length;
	var height = canvas.height;
	var maxVal = Math.max.apply(Math, list);
	height = height/maxVal;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k == j || k == i) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * (width + 1), 0, width, list[k]*height);
    }
  }
}
