// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

// Example 1:

// Input: n = 10, pick = 6
// Output: 6

// Example 2:

// Input: n = 1, pick = 1
// Output: 1

// Example 3:

// Input: n = 2, pick = 1
// Output: 1

// ===========================================================================================

let n1 = 10;
let n2 = 1;
let n3 = 2;

var guess = function(num) {}

var guessNumber = function(n) {
    let start = 1;
    let end = n;
    let mid = 0;

    while(start <= end) {
        mid = Math.floor((start + end) / 2);
        if(guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === 1) {
            start = mid + 1;
        } else if (guess(mid) === -1) {
            end = mid - 1;
        }
    }
    return mid;
};

console.log(guessNumber(n1));
// Output: 6

console.log(guessNumber(n2));
// Output: 1

console.log(guessNumber(n3));
// Output: 1