const codingQuestion = [
  {
    que: "Write a JS Code to remove duplicate character from string .",
    ans: "https://codesandbox.io/p/devbox/remove-duplicate-from-string-cldy8l?embed=1&file=%2Fsrc%2Findex.mjs",
    category: "string",
    code: `function removeDuplicateCharacterFromString(str) {
            return [...new Set(str.split(""))].join("");
          }
          
          const result = removeDuplicateCharacterFromString("Hello World");
          
          console.log(result)`
  },
  {
    que: "Write a JS Function to reverse each world in a string.",
    ans: "https://codesandbox.io/p/devbox/75mggj?migrateFrom=r7fyyf",
    category: "string",
    code: `function reverseWordInString(str) {
            return str
              .split(" ")
              .map((word) => word.split("").reverse().join(""))
              .join(" ");
          }
          
          const result = reverseWordInString("Hello World");
          console.log(result);`
  },
  {
    que: "Write a JavaScript function to capitalize the first letter of a string.",
    code: `function capitalizeFirstLetter(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
    }
        
    capitalizeFirstLetter("hello World in js")
        `,
    category: `string`

  },
  {
    que: 'Write a JavaScript function to capitalize the first letter of each word in a string.',
    code: `function capitalizeEachWordInString(str){
              return str.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        }
        
        
       console.log(capitalizeEachWordInString("hello world from javascript "))
        `,
    category: "string"
  },
  {
    que: "Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.",
    code: `function toogleLetters(str){
           return str.split('').map(letter=>{
            if(letter===" "){
                return letter
            }
            else if([1,2,3,4,5,6,7,8,9,0].includes(letter)){
                return letter
            }
            else if(letter===letter.toUpperCase()){
                return letter.toLowerCase()
            }
            return letter.toUpperCase()
           }).join('')
        }
        
        toogleLetters("Hello World From JavaScript")
        `,
    category: "string"
  },
  {
    que: "Write a JavaScript function to convert a string into camel case.",
    code: `function convertToCamelCase(str){
           return str.split(" ").map((word, index)=>{
              if(index===0){
                return word.charAt(0).toLowerCase() + word.slice(1)
              }
              return word.charAt(0).toUpperCase() + word.slice(1)
           }).join(" ").replaceAll(" ", "")  
        }
        
        convertToCamelCase("Hello World From JavaScript")
        `,
    category: "string"
  },
  {
    que: "Write a JavaScript function to uncommelize a string.",
    category: "string",
    code: `//Write a JavaScript function to uncommelize a string.

        function unCamelize(str) {
          let arr = str.split("");
        
          let dummyArr = [];
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i].toUpperCase()) {
              dummyArr.push(" ")
              dummyArr.push(arr[i].toLowerCase());
            } else {
              dummyArr.push(arr[i]);
            }
          }
        
          return dummyArr.join("");
        }
        
        const result = unCamelize("helloWorld");
        console.log(result);
        //output=> hello world
        `,
    ans: "https://codesandbox.io/p/sandbox/string-manipulation-9dg447?file=%2Fsrc%2Findex.mjs%3A4%2C3"
  },
  {
    que: "Write a JavaScript function to concatenate a given string n times",
    code: `//Write a JavaScript function to concatenate a given string n times

        function repeat(str, n = 1) {
          let result = "";
        
          for (let i = 0; i < n; i++) {
            result += str;
          }
        
          return result;
        }
        
        console.log(repeat("Ha!"));
        // output=> "Ha!"
        
        console.log(repeat("Ha!", 2));
        //output=>"Ha!Ha!"
        
        console.log(repeat("Ha!", 3));`,
    category: "string",
    ans: "https://codesandbox.io/p/sandbox/string-k6ts92"
  },
  {
    que: "Write a JavaScript function to insert a string within a string at a particular position (default is 1).",
    code: `//Write a JavaScript function to insert a string within a string at a particular position (default is 1).
        function insert(str1, str2, pos = 1) {
          return [str1.slice(0, pos), str2, str1.slice(pos)].join("");
        }
        
        let result = insert("We are doing some exercises.", "JavaScript ", 18);
        
        console.log(result);`,
    category: "string",
    ans: "https://codesandbox.io/p/sandbox/string-2-8yg7cy"
  },
  {
    que: "Write a JS function to count the number of each character in string",
    code: `
    function countCharacters(str) {
      let obj = {}
      str
        .split("")
        .forEach(element => {
          if (!obj[element]) {
            obj[element] = 1
          } else {
            obj[element] += 1
          }
        })
    
      return obj
    }
    
    console.log(countCharacters("hello world"));
    `,
    category: "string"
  },
  {
    que: ' Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.',
    code: `
    function text_truncate(str, number = 0, ending = "---") {

      if (number) {
        return str.slice(0, number + ending.length) + ending
      }
      return str
    }
    text_truncate('We are doing JS string exercises.', 19, "...")
    `,
    category: "string"
  },
  {
    que: "Write a JavaScript function to chop a string into chunks of a given length.",
    category: "string",
    code: `function string_chop(str, num){
    let arr = []
  
    for(let i = 0; i < str.length; i+=num){
     arr.push(str.slice(i, i+num))   
    }
    return arr
}

string_chop('w3resource',2)`
  },
  {
    que: " Write a JavaScript function to count substrings in a string.",
    code: `function countSubStringOccurances(str, word){
    return str.split(word).length - 1
    }
    countSubStringOccurances('aa, bb, cc, dd, aa', 'aa')
    `,
    category: "string"
  },
  {

    que: "Write a JavaScript function to get a part of a string after a specified character.",
    code: `
    function myFun(str, subStr, position="before"){
      if(position =="before"){
        return str.slice(0, str.indexOf(subStr))
      }else{
        return str.slice(str.indexOf(subStr)+1)
      }
      
    }
    myFun('w3resource: JavaScript Exercises', ':')
    `,
    category: "string"

  },
  {
    que: "Javascript Program To Check Whether Two Strings Are Anagram Of Each Other",
    code: `
    function checkAnagram(str1, str2){
          if(str1.length!==str2.length){
            return false;
          }
          return  str1.split('').sort().join('') === str2.split('').sort().join('')
    }
    checkAnagram('abc', 'cba')
    `,
    category: "string"
  },
  {
    que: "Write a JavaScript function to truncate a string to a certain number of words.",
    code: `
    function truncate(str, n){
      return str.split('').slice(0, n).join('')
    }
    truncate("Hello World From JS", 3)
    
    `,
    category: "string"
  },
  {
    que: "Write a JavaScript function to alphabetize a given string.Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.",
    category: "string",
    code: `function alphabetize(str){
      return str.split('').sort().join().trim()
    }
    alphabetize("United States")
    `
  },
  {
    que: "Write a JavaScript function to remove the first occurrence of a given 'search string' from a string",
    category: "string",
    code: `function removeFirstOccurance(str, subStr){
         return str.replace(subStr, '')
    }
    
    removeFirstOccurance("the quick brown fox jumps over the lazy dog", 'the')
    `
  },
  {
    que: "Write a JavaScript function to find count of word within a string.",
    code: `
    function countOfWord(str, word){
 
      return str.split(word).length - 1
    }
    countOfWord('aa, bb, cc, dd, aa', 'aa')

    function myFun(str, word){
      var regExp = new RegExp(word, "gi");
    return (str.match(regExp) || []).length;
    }
    myFun('aa, bb, cc, dd, aa', 'aa')

    `,
    category: "string"
  },
  {
    que: "Write a JavaScript function that checks whether a string ends with a specified suffix.",
    code: `function isEndWithSubStr(str, subStr){
      return  subStr===str.split('').slice(str.length-subStr.length).join("")
    }
    
    isEndWithSubStr('JS PHP PYTHON','PYTHON')

    function isEndsWith(str, subStr){
      return str.indexOf(subStr, str.length - subStr.length) !== -1;
    }
    isEndsWith('JS PHP PYTHON','PYTHON')
    `,
    category: "string"
  },
  {
    que: "Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.",
    category: "array",
    code: `
    function getFirstNElements(arr, n){
      if(!n && arr.length){ 
        return arr[0]
      }
      else if(!n && !arr.length){
        return []
      }  
      return arr.slice(0, n)
    }
    
    getFirstNElements([1,2,3,4,5,6,7], 4 )`
  },
  {
    que: "Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.",
    category: "array",
    code: `function getLastNElements(arr, n) {
      if (!n && arr.length) {
        return arr[arr.length - 1]
      }
      else if (!n && !arr.length) {
        return []
      } else {
         return arr.slice(arr.length - n)  
      }
    }
    
    getLastNElements([1,2,3,4,5,6], 2)`
  },
  {
    que: `Write a simple JavaScript program to join all elements of the following array into a string.
    Sample array : myColor = ["Red", "Green", "White", "Black"];
    Expected Output :
    "Red, Green, White, Black"`,
    category: "array",
    code: `
    function joinArray(arr){
      return arr.join(', ')
    }
    
    joinArray(["Red", "Green", "White", "Black"])
    `
  },
  {
    que: "Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.",
    category: "array",
    code: `
    function insertDashes(num){
      let arr = num.toString().split('')
     let newArr=[]
      for(let i=1; i<arr.length; i++){
        
        if( Number(arr[i])%2===0 && Number(arr[i-1])%2===0){
          newArr.push('-')
        }
        newArr.push(arr[i])
      }
      return newArr.join('')
    }
    
    insertDashes(1245362982786987424)`
  },
  {
    que: "Write a JavaScript program to sort the items of an array",
    category: "array",
    code: `
    function sortArray(arr){
      return arr.sort((a,b)=>a-b)
    }

    sortArray([7,8, -1, 0, 4, 3, 9, 10, 57, 23])
    `
  },
  {
    que: `Write a JavaScript program to find the most frequent item in an array. 
    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    Sample Output : a ( 5 times )`,
    category: "array",
    code: `
    function findMostFrequentItem(arr){
      let result , frequency=0;
      let obj={}
      for(let i=0; i<arr.length; i++){
         if(!obj[arr[i]]){
          obj[arr[i]]=1
         }else{
          obj[arr[i]]+=1
         }
      }
    
      for (key in obj){
        if(obj[key]>frequency){
          frequency=obj[key];
          result=key
        }
      }
    
      return result +"("+ frequency + ") times" 
    }
    findMostFrequentItem([12,3,4,5,6,7,7,7,7,7,,7,7,7,7,,8,8,8,6, 1,1,1,1])
    `
  },
  {
    que: "Function to calculate the sum of squares of elements in an array",
    category: "array",
    code: `
    function sumOfSquares(arr){
      let sum=0 
      for(let i=0; i< arr.length; i++){
         sum+=arr[i]*arr[i] 
       }
       return sum
    }
    
    sumOfSquares([0,1,2,3])

    function sumOFSquares(arr){
      return arr.reduce((acc, cur)=>{
        return (cur*cur)+acc
      }, 0)
    }
    
    sumOFSquares([0,1,2,3])
    
    `
  },
  {
    que: "Write a JavaScript program to compute the sum and product of an array of integers.",
    category: "array",
    code: `
    function sum(arr){
      return arr.reduce((acc, cur)=>acc+cur, 0)
    }
    function product(arr){
      return arr.reduce((acc, cur)=>{
        return acc*cur}
      )
    }
    sum([1,2,3,4,5])
    
    product([1,2,3,4])
    `
  },
  {
    que: "Write a JavaScript program to remove duplicate items from an array",
    category: "array",
    code: `
    function removeDuplicate(arr){
      return [...new Set(arr)]
  }
  
  removeDuplicate([1,1,22,3,3,4,4,7,5,5,7, 22 ])

  function removeDuplicate(arr){
    let obj={}
    
    for(let i=0;i<arr.length;i++){
      obj[arr[i]]=0
    }
  
    return Object.keys(obj)
  
  }
  
  removeDuplicate([1,1,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9])
    `
  },
  {
    que: `Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.`,
    category: "array",
    code: `
    function removeFalseValues(arr){
     let newArr =[]
     for(let i=0; i<arr.length; i++){
          if(arr[i]){
          newArr.push(arr[i])
            }
         }
      return newArr
    }

    removeFalseValues( [NaN, 0, 15, false,0, -22, '',undefined, 47, null])
    `
  },
  {
    que: `Write a JavaScript code to sort the following array of objects by title value.
    Sample object :
    
    var library = [ 
       { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
       { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
       { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
       ];`,
    category: "array",
    code: `
   var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
  
  
    library.sort((a,b)=>{
      let titleA= a.title.toUpperCase()
      let titleB=b.title.toUpperCase()
  
      if(titleA<titleB){
        return -1
      }
      else{
        return 1
      }
    })
   `
  },
  {
    que: `Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

    Input: numbers= [10,20,10,40,50,60,70], target=50
    Output: 0, 3
    `,
    category: "array",
    code: `
    function twoSum(arr, target){
      for(let i=0; i<arr.length; i++){
        if(arr.includes(target-arr[i])){
          return [i, arr.indexOf(target-arr[i])]
        }
      }
    }
    
    twoSum([10,20,10,40,50,60,70],50)

    
function twoSum(arr, target){
  for(let i=0; i<arr.length; i++){
    
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j]===target){
         return[i, j]
      }
    }
  }
}

twoSum([10,20,10,40,50,60,70],50)

    `
  },
  {
    que: "Write a JavaScript function to generate an array between two integers of 1 step length.",
    category: "array",
    code: `
    function rangeBetween(a,b){
      let arr =[]
      let start = Math.min(a,b)
      let end = Math.max(a,b)
      for(let i=start; i<=end; i++){
          arr.push(i)
      }
     return arr
  }
  
  rangeBetween(2,4)
    `
  }

]



export default codingQuestion