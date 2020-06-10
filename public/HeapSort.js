var array_length;
var opDelay;
/* to create MAX  array */
async function heapSort(input, delay) {
  array_length = input.length;
  heapSortColour(input, 0, input.length);
  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      await heap_root(input, i);
    }

  for (i = input.length - 1; i > 0; i--) {
      await swap(input, 0, i);
      array_length--;
      heapSortColour(input, i, array_length)

      await heap_root(input, 0);
  }

  var canvas = document.getElementById('heapSort');
  var ctx = canvas.getContext('2d');
  await finnishedCanvasRecolour(ctx, input);
}

async function heap_root(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max])     {
    max = right;
  }
  await checkStates();

  if (max != i) {
    await swap(input, i, max);
    await heap_root(input, max);
  }
}

async function swap(input, index_A, index_B) {
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
  await checkStates();
}


async function heapSortColour(list, i, j) {
  var canvas = document.getElementById('heapSort');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  width = (width - list.length)/list.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var k = 0; k < list.length; k++) {
    if (k == j-1) {
      ctx.fillStyle = '#FFa500';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    } else if (k >= i) {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    } else {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(k * (width + 1), 0, width, list[k]);
    }
  }
}
