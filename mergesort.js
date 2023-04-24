function mergeSort(array) {
  //On Inout of N Elements
  //if n < 2 then Return
  // else
  //sort left half of elements
  //sort right half of elements
  //merge sorted halves
  let copy = array;
  if (copy.length <= 1) {
    return copy;
  }
  let mid = Math.floor(copy.length / 2);
  let left = mergeSort(copy.slice(0, mid));
  let right = mergeSort(copy.slice(mid));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1.slice().concat(arr2.slice()));
}

module.exports = mergeSort;
