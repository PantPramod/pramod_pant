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
        ans:"https://codesandbox.io/p/sandbox/string-2-8yg7cy"
    }


]

export default codingQuestion