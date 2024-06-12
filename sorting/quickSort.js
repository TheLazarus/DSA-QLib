function quickSort(arr) {
  qs(arr, 0, arr.length - 1);
}

function qs(arr, low, high) {
  // Need to choose a pivot whenever low < high

  if (low < high) {
    let pIndex = partition(arr, low, high);
    qs(arr, low, pIndex - 1);
    qs(arr, pIndex + 1, high);
  }
}


function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i < j) {
        
    }
}

let arr = [6, 5, 1, 10, 34, 2, 1, 90, 80];
quickSort(arr);
