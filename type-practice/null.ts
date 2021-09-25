// undefined & null are subtypes of all other types.
// 즉 number에 null 도는 undefined를 할당할 수 있다는 의미이다.
// 하지만, 컴파일 옵션에서 '--strictNullChecks'를 사용하면, null과 undefined는 void나 자기 자신들에게만 할당 가능.

// let MyName: string = null;
// let u: undefined = null;
let v: void = undefined;

let union: string | null= null;

union = "Mark";