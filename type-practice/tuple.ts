let x: [string, number];

x = ["hello", 39];

// x = [10, "Mark"]

// x[2] = "world";
// Type '"world"' is not assignable to type 'undefined'
// 튜플은 두개만 넣을 수 있도록 지정했는데 왜 3번째를 추가하려고 하냐?

const person: [string, number] = ["Mark", 39];

const [first, second] = person;