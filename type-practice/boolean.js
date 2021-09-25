"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone);
var isOk = true;
var isNotOk = new Boolean(true);
// new Boolean은 래퍼 객체로써 작성하면 Object가 생성되기 때문에 에러 발생.
