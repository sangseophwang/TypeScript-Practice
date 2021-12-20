// Union type
// 새로운 타입
let member: number | string = 123;
let members: (number | string)[] = [1, "2", 3];

// any
// 실드 해제, 타입 관련 버그가 생길 경우 추적할 수 없다. 대신 어떤 타입이든 다 사용할 수 있다.
let Hello: any = "Bye";

//unknown
// any와 동일하게 모든 타입을 집어넣을 수 있다.
// 자료를 넣어도 타입은 그대로 unknown 이다.

let friend: unknown;
