async function selectionSort(list, delay) {
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    let min = 100000000;
    let highestIndex = 0;
    for (var j = i; j < list.length; j++) {
      if (list[j] <= min) {
        await checkStates();
        highestIndex = j;
        min = list[j];
      }
      await checkStates();
      selectionSortColour(list, i, j);
    }

    let swap = list[i];
    list[i] = list[highestIndex];
    list[highestIndex] = swap;
  }

  var canvas = document.getElementById('selectionSort');
  var ctx = canvas.getContext('2d');
  await finnishedCanvasRecolour(ctx, list);
  running = false;
  document.getElementById('startBtn').src='start.png';
  console.log("finnished");
  }

async function selectionSortColour(list, i, j) {
  var canvas = document.getElementById('selectionSort');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  width = (width - list.length)/list.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k < i) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    } else if (k == j) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    }
  }
}
