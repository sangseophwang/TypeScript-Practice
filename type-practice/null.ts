// undefined & null are subtypes of all other types.
// 즉 number에 null 도는 undefined를 할당할 수 있다는 의미이다.
// 하지만, 컴파일 옵션에서 '--strictNullChecks'를 사용하면, null과 undefined는 void나 자기 자신들에게만 할당 가능.

// null은 무언가가 있는데, 사용할 준비가 덜 된 상태를 의미한다.
// null이라는 타입은 null이라는 값만 가질 수 있다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, object로 뜬다.


// undefined는 값을 할당하지 않은 변수로써 무언가가 아예 준비되지 않은 상태를 뜻한다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefined라고 뜬다.


// let MyName: string = null;
// let u: undefined = null;
let v: void = undefined;

// Union type
let union: string | null= null;

union = "Mark";