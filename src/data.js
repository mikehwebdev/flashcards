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
    question:"What does filter() do Redux?",
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
}
]