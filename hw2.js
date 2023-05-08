function reverseNum(x) {
  stringx = x.toString();
  reversedx = stringx.split("").reverse().join("");
  return reversedx;
}

function checkPalindrome(x) {
  stringx = x.toLowerCase().split("").join("");
  var left = 0;
  var right = stringx.length - 1;
  while (left < right) {
    if (stringx[left] !== stringx[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
const x = "nurses run";
console.log(checkPalindrome(x));

// 3. Generate all combinations of a string
function generateCombinations(str) {
  let result = [];

  // Recursive function to generate all combinations
  function helper(prefix, remaining) {
    result.push(prefix);
    for (let i = 0; i < remaining.length; i++) {
      helper(prefix + remaining[i], remaining.slice(i + 1));
    }
  }

  helper("", str);
  return result;
}

// 4. Return a string with letters in alphabetical order
function sortString(str) {
  return str.split("").sort().join("");
}

// 5. Convert the first letter of each word to uppercase
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// 6. Find the longest word in a string
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// 7. Count the number of vowels in a string
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// 8. Check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
// 9. Get the type of an argument
function getType(arg) {
  return typeof arg;
}

// 10. Generate an n x n identity matrix
function generateIdentityMatrix(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }

  return matrix;
}

// 11. Find the second lowest and second greatest numbers in an array
function findSecondLowestAndGreatest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const uniqueArr = [...new Set(sortedArr)];

  return [uniqueArr[1], uniqueArr[uniqueArr.length - 2]];
}

// 12. Check if a number is perfect
function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

// 13. Compute the factors of a positive integer
function computeFactors(num) {
  let factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

// 14. Convert an amount to coins
function amountToCoins(amount, coins) {
  let result = [];
  let remaining = amount;

  for (let coin of coins) {
    const count = Math.floor(remaining / coin);
    remaining -= count * coin;

    for (let i = 0; i < count; i++) {
      result.push(coin);
    }
  }

  return result;
}

// 15. Compute the value of b^n
function computeExponentiation(base, exponent) {
  return Math.pow(base, exponent);
}

// 16. Extract unique characters from a string
function extractUniqueCharacters(str) {
  return [...new Set(str)].join("");
}

// 17. Get the number of occurrences of each letter in a string
function countLetterOccurrences(str) {
  let occurrences = {};

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1;
    }
  }

  return occurrences;
}

// 18. Binary search in a sorted array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// 19. Get array elements larger than a number
function getElementsLargerThan(arr, num) {
  return arr.filter((element) => element > num);
}

// 20. Generate a random string ID of specified length
function generateRandomStringId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// 21. Get all possible subsets with a fixed length
function getSubsetsWithFixedLength(arr, length) {
  let subsets = [];

  function generateSubsets(currentSubset, start) {
    if (currentSubset.length === length) {
      subsets.push(currentSubset.slice());
      return;
    }

    for (let i = start; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      generateSubsets(currentSubset, i + 1);
      currentSubset.pop();
    }
  }

  generateSubsets([], 0);
  return subsets;
}

// 22. Count the number of occurrences of a letter in a string
function countLetterOccurrencesInString(str, letter) {
  const regex = new RegExp(letter, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

// 23. Find the first non-repeated character in a string
function findFirstNonRepeatedCharacter(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
      }
    }
  }

  return arr;
}

function getLongestCountryName(countries) {
  let longestName = "";

  for (let country of countries) {
    if (country.length > longestName.length) {
      longestName = country;
    }
  }

  return longestName;
}

function longestSubstringWithoutRepeating(str) {
  let longestSubstring = "";
  let currentSubstring = "";
  let charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }

      charSet.clear();
      currentSubstring = "";
    }

    charSet.add(char);
    currentSubstring += char;
  }

  return longestSubstring;
}

// 24. Bubble Sort algorithm
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
      }
    }
  }

  return arr;
}

// 25. Get the longest country name from a list
function getLongestCountryName(countries) {
  let longestName = "";

  for (let country of countries) {
    if (country.length > longestName.length) {
      longestName = country;
    }
  }

  return longestName;
}

// 26. Find the longest substring without repeating characters
function longestSubstringWithoutRepeating(str) {
  let longestSubstring = "";
  let currentSubstring = "";
  let charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }

      charSet.clear();
      currentSubstring = "";
    }

    charSet.add(char);
    currentSubstring += char;
  }

  return longestSubstring;
}

// 27. Find the longest palindrome in a string
function longestPalindrome(str) {
  let longest = "";

  function expandFromCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  }

  for (let i = 0; i < str.length; i++) {
    const oddPalindrome = expandFromCenter(i, i);
    const evenPalindrome = expandFromCenter(i, i + 1);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }

  return longest;
}

// 28. Pass a JavaScript function as a parameter
function executeFunction(func) {
  func();
}

// 29. Get the function name
function getFunctionName(func) {
  return func.name;
}
