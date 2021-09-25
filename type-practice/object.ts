// object
// primitive type가 아닌 것을 나타내고 싶을 때 사용하는 타입
// not number, string, boolean, bigint, symbol, null, or undefined.


const person1 = { name: "Mark", age: 39 };
// person1 is not 'object' type.
// person1 is "{ name: "Mark", age: 39 }" type.

// create by Object.create
const person2 = Object.create({ name: "Mark", age: 39 });