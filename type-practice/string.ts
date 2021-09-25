// string
// JS와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 큰 따옴표 ("")나, 작은 따옴표 ('')를 사용한다.

let myName: string = "mark";

myName = 'Anna'

let fullName: string = 'Mark Lee';
let age: number = 39;

let sentence: string = `Hello, My name is ${fullName}.

I'll be ${age + 1} years old next month.`;

console.log(sentence)