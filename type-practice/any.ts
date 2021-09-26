// any
/* 
  어떤 타입이어도 상관없는 타입.
  이걸 최대한 쓰지 않는게 핵심이다.
  왜냐하면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문임.
  그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다. (noImplicitAny)
*/

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();
