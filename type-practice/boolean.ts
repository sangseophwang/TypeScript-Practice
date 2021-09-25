let isDone: boolean = false;

isDone = true;

console.log(typeof isDone);

let isOk: Boolean = true;

let isNotOk: boolean = new Boolean(true);
// new Boolean은 래퍼 객체로써 작성하면 Object가 생성되기 때문에 에러 발생.