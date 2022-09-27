/**
 * Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2 || s === s[s.length - 1]) return s;
    let str = "";
    let strLength = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i,
            right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (s.substring(left, right + 1).length > strLength) {
                strLength = right + 1 - left;
                str = s.substring(left, right + 1);
            }
            left -= 1;
            right += 1;
        }

        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (s.substring(left, right + 1).length > strLength) {
                strLength = right + 1 - left;
                str = s.substring(left, right + 1);
            }
            left -= 1;
            right += 1;
        }
    }
    return str;
};

/**
 * Logic
 * 1. 문자열의 길이가 2보다 작으면, 바로 리턴한다.
 * 2. 문자열과 문자열 길이를 저장할 변수를 만든다.(str, strLength)
 * 3. 문자열의 첫번째 인덱스부터 반복문을 돌면서 이전 문자열과 비교를 한다.
 * 4. left, right 변수를 포인터로 사용해 해당 문자열의 left,right인덱스 value의 값이 같지 않다면 while문을 멈춘다.
 * 5. 같다면 팰린드롬이므로 변수에 저장 후 반복문을 진행한다.
 * 6. 홀수, 짝수의 경우가 다르므로 둘 다 처리해 준다.
 */
