// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// ========================================================================================

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

let nums2 = [-1, 0, 3, 5, 9, 12];
let target2 = 2;

var search = function (nums, target) {
    // setting our variables
    let left = 0;
    let right = nums.length - 1;
    let mid;

    // using while loop
    while (left <= right) {
        // finding the middle of the array for the binary search
        mid = Math.floor((left + right) / 2);

        // if the middle is equals to the target return the target
        if (nums[mid] === target) return mid;

        // if the middle is less than the target then set the left to middle and add 1 to continue our next search. we add one because we already checked middle in the first 'if' statement
        if (nums[mid] < target) {
            left = mid + 1;

            // if the middle is greater than the target then set the right to middle and add 1 to continue our next search. we add one because we already checked middle in the first 'if' statement
        } else {
            right = mid - 1;
        }
    }

    // if we never find our target then just return -1
    return -1;
}

console.log(search(nums, target));
// Output: 4

console.log(search(nums2, target2));
// Output: -1