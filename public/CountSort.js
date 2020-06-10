async function countSort(list, delay) {
  let count = [];
  let i, z = 0;
  let max = Math.max(...list);
  countSortColour(list, 0, 0);
  for (i = 0; i <= max; i++) {
    count[i] = 0;
    await checkStates();
  }
  for (i = 0; i < list.length; i++) {
    count[list[i]]++;
    countSortColour(list, i, 0);
    await checkStates();
    await checkStates();
  }
  for (i = 0; i <= max; i++) {
    while (count[i]-- > 0) {
      list[z++] = i;
      countSortColour(list, z, z)
      await checkStates();
    }
  }
  var canvas = document.getElementById('countSort');
  var ctx = canvas.getContext('2d');
  await finnishedCanvasRecolour(ctx, list);
  /*
  console.log('Comparsions: ' + comparisons);
  console.log('Swaps: ' + swaps);
  return list;
  */
}

async function countSortColour(list, i, j) {
  var canvas = document.getElementById('countSort');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  width = (width - list.length)/list.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k == i) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    } else if (k < j) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    }
  }
}
