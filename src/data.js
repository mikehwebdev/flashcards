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
    answer:["Reduce is commonly used to reduce an array of numbers to a single number. It’ll iterate over the array and take the initial number (0 in this case) and add each element to the current total as it iterates.", `const sum = nums.reduce((total, current) => {
        return total + current;
    }, 0)
    `,"console.log(sum); - returns 15"]
    
},
{
    id:6,
    question:"What's the difference between undefined and null?",
    answer:["Null is intentional – undefined is not. Null  is defined but has an empty value.","An example might be a customer record will have email address and password as bare minimums to having an account, but the object will have properties for Name and DOB but are as yet undefined."]
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
    question: "Why do we desctructure arrays and objects?",
    answer:["We destructure to create clean code and make it more readable. ","In the below it makes more sense to deconstruct the array so you can just refer to day rather than the zero index of dob.","The example below that helps you re-name properties so that the code you right is more readable i.e referring to firstName rather than f.", "Order is important though when destructuring so you can be sure each variable is assigned to the correct index position.", "const dob = [10, 25, 1987];", "const day = dob[0]", "const [day, month, year] = dob;", "or", "const user = {f: 'Mike',", "l: 'Hatton'", " };"," const {f: firstName, l: lastName } = user;"],
}, 
{
    id:12,
    question: "What is specificity in CSS?",
    answer:["Specificity in CSS is the order of priority when applying styles in CSS.", "Highest priority is styles applied inline (1000 points), then the # id selector (100), then .class (including pseudo-class or attribute selector -  all 10 points), then the element selector or pseudo element (1 point).","So an example would be a#big-button would be 1 + 100 points"]
}
]











// {
//     id:XX,
//     question:
//     answer:[]
// }