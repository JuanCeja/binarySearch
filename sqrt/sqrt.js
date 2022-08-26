// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.


// Example 1:

// Input: x = 4
// Output: 2

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// ========================================================================================

let x = 4;
let x1 = 8;

var mySqrt = function (x) {
    let left = 1;
    let right = x;

    if (x < 2) return x;

    while (left < right) {
        // find the center
        mid = Math.floor((right + left) / 2);

        // if the center is squared to our input we return it
        if (mid ** 2 === x) {
            return mid;

            // we set our new search using binary
        } else if (mid ** 2 > x) {
            right = mid;
            
            // we set our new search using binary
        } else if (mid ** 2 < x) {
            left = mid + 1;
        }
    }


    // we subtract 1 to left because left squared is greater than our input
    return left - 1
};

console.log(mySqrt(x));
// Output: 2

console.log(mySqrt(x1));
// Output: 2