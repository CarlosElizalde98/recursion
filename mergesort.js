function mergeSort(array) {
  //On Inout of N Elements
  //if n < 2 then Return
  // else
  //sort left half of elements
  //sort right half of elements
  //merge sorted halves
  let copy = array;
  if (copy.length > 2) {
    let mid = Math.floor(copy.length / 2);
    let arr1 = copy.slice(1, mid);
    mergeSort(arr1);
    let arr2 = copy.slice(mid + 1, copy.length);
    mergeSort(arr2);
    merge(arr1, arr2, arr1.length, arr2.length);
  } else {
    return copy;
  }
}

function merge(arr1, arr2, firstL, secondL) {
  let a = firstL;
  let b = secondL;

  let [i, j, k] = [1, 1, 1];
  let sorted = [];

  while (i < a && j < b) {
    if (arr1[i] < arr2[j]) {
      sorted[k++] = arr1[i++];
    } else {
      sorted[k++] = arr2[j++];
    }
  }
  for (i; i <= a; i++) {
    sorted[k++] = arr1[i];
  }
  for (j; j <= b; j++) {
    sorted[k++] = arr2[j];
  }

  return sorted;
}

module.exports = mergeSort;
