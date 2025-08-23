// I recently got to learn about binary search, i splits the list in half and searches that half. Pros, It's faster. Cons, it only works for a sorted list (mostly numbers i think). 
//Complexity:
//Time complexity: O(log n) (each step halves the search space).
//Best case: O(1) (if target is at the middle first check).


//The method is really cool but the code looks crazy. 
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midValue = arr[mid];
    
    if (midValue === target) {
      return mid;
    }
    
    if (midValue < target) {
      start = mid + 1;  // Search right half
    } else {
      end = mid - 1;    // Search left half
    }
  }
  
  return -1; // Target not found
}
