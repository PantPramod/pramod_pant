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
  }



]





export default codingQuestion