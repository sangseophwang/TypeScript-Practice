// Union type
// 새로운 타입
let member: number | string = 123;
let members: (number | string)[] = [1, "2", 3];

// any
// 실드 해제, 타입 관련 버그가 생길 경우 추적할 수 없다. 대신 어떤 타입이든 다 사용할 수 있다.
let Hello: any = "Bye";

// unknown
// any와 동일하게 모든 타입을 집어넣을 수 있다.
// 자료를 넣어도 타입은 그대로 unknown 이다.

let friend: unknown;

// void
// 함수가 실수로 뭔가 return하는 것을 사전에 막을 수 있다.

// ? 타입
// 파라미터가 옵션인 경우
// 변수? : number = 변수 : number | undefined

function one(x?: number): void {
  1 + 1;
}

one();

// Narrowing
function sum(x: number | string) {
  if (typeof x === "number") return x + 2;
  else return x + "2";
}

sum(100);

// Assertion
// 표명, 프로그램 안에 추가하는 참, 거짓을 미리 가정하는 문
// 타입 덮어쓰기
// 1. Narrowing할 때 쓴다.
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다. -> 버그 캐치가 안되기 때문!
// 그래서 자주 안 쓰인다. (비상용 !)
function pushArray(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

pushArray(123);
