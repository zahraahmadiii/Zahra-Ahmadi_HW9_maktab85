function filterRange(arr, x, y) {
    return arr.filter((value) => value >= x && value <= y);
  }
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  console.log(filtered);
  console.log(arr);