export default [{
    id: 0,
    question: "Name all falsy values.",
    answer: ["undefined - A variable that isn't yet assigned or a function returns undefined if it returns no value", "Null - Absence of any value at all i.e what you're referencing doesn't exist", "NaN - Not a Number - An example would be const result = a * 7 would return NaN as you can't times 7 by a", "0 - Just a zero", '"" -  an empty string is considered falsy as this is often a token and is the initial value.', "false - straight false value"]
},
{
    id:1,
    question: "What is the difference between const, let and var?",
    answer: ["const and let use block scope and so only exist inside {} wherever they are in code.", "const stores constant values (i.e date of birth) and can't be re-assigned. You can modify object values and array values but not the const itself.","let can store transient values (i.e a boolean).", "var (which is basically deprecated at this point) uses lexical scope so variables get hoisted but isn't defined."]
},
{
    id:2,
    question: "What's the difference between == and ===?",
    answer: ["=== is strictly equals - only absolutely equal elements (type AND value)", "== is just comparing value","Example:", "const value1 = 5", "const value2 = '5'", "(JS converts the number to string for comparison)", "console.log(value1 == value2); --true", "console.log(value1 === value2);--false"]
},
{
    id:3,
    question: "What does the map() do?",
    answer: ["Maps over an existing array, runs a specified piece of code(could be returning JSX in React for example) for each element and generates a new array leaving the original unchanged. Can have index as an additional parameters.","eg const nums = [1, 2, 3, 4, 5]", "const numsAddOne = nums.map((value) => value + 1);","so numsAddOne = [2, 3, 4, 5, 6]"]
}, 
{
    id:4,
    question:"What does filter() do?",
    answer:["Filter loops over an array and only returns elements that match true for the given bit of code.", "eg const nums = [1, 2, 3, 4, 5]", "const moreThan3 = nums.filter(num => return num > 3) ", " so const moreThan3 = [4,5]"]
    
}, 
 {
    id:5,
    question:"What does reduce() do?",
    answer:["Reduce is commonly used to reduce an array of numbers to a single number.","It'll iterate over the array and take the initial number (0 in this case) and add each element to the current total as it iterates.", `const sum = nums.reduce((total, current) => {
        return total + current;
    }, 0)
    `,"console.log(sum); - returns 15"]
    
},
{
    id:6,
    question:"What's the difference between undefined and null?",
    answer:["Null is intentional - undefined is not. Null  is defined but has an empty value.","An example might be a customer record will have email address and password as bare minimums to having an account, but the object will have properties for Name and DOB but are as yet undefined."]
},
{
    id:7,
    question:"What are the primitive data types?",
    answer:["Strings - text", "Numbers - integers", "Booleans - True or False values", "BigInt - to be researched", "Symbols - to be researched"]
},
{
    id:8,
    question:"What are the non-primitive data types?",
    answer:["Array", "Objects", "Maps","Sets"]
},
{
    id:9,
    question:"What does the spread operator do?",
    answer:["Allows you to copy in an object or array.","I use this in React for copying in an objects previous state before overwriting a property I'm changing.","eg const users = ['Dylan', 'Per', 'Dollan'];","const allUsers = ['Olivia', ...users];", "setState(","prevState => {…prevstate, name: newName})", "You can also use this in destructuring","const {name, …remainder} = defaults","console.log(remainder) returns dob, address but not name here for example"]
},
{
    id:10,
    question:"What does the rest operator do?",
    answer:["In the example below you can add in as many parameters as you like and the rest operator will use them all in the code", "function addNums(...nums){", "return nums.reduce((total, current) => { return total + current; }, 0)", "}", "console.log(addNums(1,2,3)) output = 6", "console.log(addNums(1,2)) output = 3"]
},
{
    id:11,
    question: "Why do we destructure arrays and objects?",
    answer:["We destructure to create clean code and make it more readable. ","In the below it makes more sense to deconstruct the array so you can just refer to day rather than the zero index of dob.", "Order is important though when destructuring so you can be sure each variable is assigned to the correct index position.", "const dob = [10, 25, 1987];", "const day = dob[0]", "const [day, month, year] = dob;", "or","The example below that helps you re-name properties so that the code you right is more readable i.e referring to firstName rather than f.", "const user = {f: 'Mike',", "l: 'Hatton'", " };"," const {f: firstName, l: lastName } = user;"],
}, 
{
    id:12,
    question: "What is specificity in CSS?",
    answer:["Specificity in CSS is the order of priority when applying styles in CSS.", "Highest priority is styles applied inline (1000 points), then the # id selector (100), then .class (including pseudo-class or attribute selector -  all 10 points), then the element selector or pseudo element (1 point).","So an example would be a#big-button would be 1 + 100 points", "or a.big-button would be 1 + 10", "Note Pseudo-classes also have a specificity of 10"]
},
{
    id:13,
    question: "What is responsive design?",
    answer:["Responsive design is HTML and CSS working in tandem to make your content look good on whatever device you use to access it.", "No information shouls be lostbecause you use the 'wrong' device.", "Typically, a web developer will think in terms of mobile, tablet and desktop experiences.", "Devs should veer away from using fixed values or pixel values and instead use EM, REM and percentages.", "Flexbox and grid are also excellent tools to make web pages responsive.", "to et the viewports of the device correctly we include the following <meta> viewport element.", '<meta name="viewport" content="width=device-width, initial-scale=1.0">', "This ensures that the default width of the content is no wider than the device and that it isn't zoomed in (i.e pinch/unpinch zoom)", "Media queries allow us to apply css properties if certain conditions are met i.e viewport width.", "So we can flip from say a flexbox column layout to a row layout when moving from mobiel to desktop widths.", "We should always design mobile first.", "This will ensure our site loads more quickly for mobile users and its easier to expand the design up to desktop rather than down to mobile."]
},{
    id:14,
    question:"What are Promises?",
    answer:["Promises are used for asynchronous actions that have three states: Fulfilled, rejected and pending.", "The interview analogy is good here.", "Fetch for example is a DOM API that allows us to retrieve data via API which returns a promise.", "If the promise is fulfilled we can use .then method to use that resolved data i.e display an image that's retrieved by API.", "If the promise fails you can then use the .catch method to then display a “Sorry no images” or error message.", "Regardless of what is returned you can use .finally - which is often used for cleaning up code say.", "We can also use await on promises like so:", "const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');", "const json = await response.json();", "this forces the code to wait for the server response before continuing. You will need to wrap this in a try statement and include a catch statement for any errors."]
}, 
{
    id:15,
    question:"What are pass by value and pass by reference?",
    answer:["Primitives(String, number, null, undefined, boolean) are pass by value. Functions, objects and arrays are pass by reference.", "Primitives are immutable so are passed by value. This is essentially a copy of the original in memory which you can then change.", "Pass by reference essentially passes the address of the original and so any changes made effect the original. "]
},
{
    id:16,
    question:"What does toUpperCase() do?",
    answer:["This method returns a string in all uppercase no matter the case each letter currently is."]
},
{
    id:17,
    question:"What does toLowerCase() do?",
    answer:["This method returns a string in all lowercase no matter the case each letter currently is."]
},
{
    id:18,
    question:"What does slice() do?",
    answer:["slice() returns a new array - the first and second parameters are the index of where the slice should occur.",`eg const array = ["apple", "orange", "grapes", "melon"]`, `const newArray = array.slice(1,2)`, `newArray will be ["oranges", "grapes"]`]
},
{
    id:19,
    question:"What does .split() do?",
    answer:[`.split() will convert a sring into an array of substrings`,`.split("") returns an array of all the characters.`,`text.split(" ") returns a array of words.`]
},
{
    id:20,
    question:"What does .join() do?",
    answer:[`Turns an array into a string.`,`const fruits = ["Banana", "Orange", "Apple", "Mango"]`, `fruits.join() returns Banana,Orange,Apple,Mango`, `fruits.join(" ") returns Banana Orange Apple Mango`, `fruits.join(" and ") returns Banana and Orange and Apple and Mango`]
},
{
    id:21,
    question:`What does endsWith() do?`,
    answer:[`endsWith() checks to see if a string ends with the supplied string and returns a boolean.`, `let text = "Hello world"`,
    `let result =  text.endsWith("world") === true`, `let result =  text.endsWith("wizard") === false`]
}, 
{
    id:21,
    question:`What does reverse() do?`,
    answer:[`Reverses the order of an array.`]
},
{
    id:22,
    question:`How do you reverse a string?`,
    answer:["There is no built in method","First you need to convert to an array using, .split(''),", "then reverse() to reverse the array", "then .join('') to convert it back into a string.", "Alternative:", "You can for loop over the string and decrement (i--)", "Then you can += to a new string"]
},
{
    id:23,
    question:`How to loop over an array that has a nested array?`,
    answer:["for of loop works best:", "If you had a superhero object that had an array of powers for each character:", "for (let character of characters){", "for (let power of character.powers){","console.log(power)", "}", "}"]
},
{
    id:24,
    question:`What is does includes() do?`,
    answer:["includes() loops over an array and if any array entry includes the provided value it returns true."," Otherwise it returns false.","The second parameter is for starting index - the default is zero"]
}, 
{
    id:25,
    question:"How can we establish if a number is odd or even?",
    answer:[`We can use the Modulus(remainder) here.`, `If you check for a remainder after dividing by 2 an even number will be zero.`,`An odd number will have a remainder.`, `EG`, `function test (number) {`,`if(number % 2==0){`,`return "even"`,`} else {`,`return "odd"`, `}`, `}`]     
}, 
{
   id:26,
   question:"What does flat() do?",
   answer:[" flat() returns a new array with all sub-arrays in the old array concatanated into one array.", "You can specifiy the depth you want to flatten with the parameter.", "This is helpful if there's multiple layers of nested arrays.", "EG if you want a third level of sub-arrays and beyond left alone you can specifiy const newArray = array.flat(2)"]
}, {
    id:27,
    question:"",
    answer:[]
}
]











// {
//     id:XX,
//     question:
//     answer:[]
// }