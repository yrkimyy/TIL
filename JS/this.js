// * this 값은 호출하는 방법에 의해서 결정.
// * 실행문맥의 구성요소 중 하나, 함수가 사용되는 동안 사용 할 수 있음 
// ! 5개의 패턴을 가짐 => global, function 호출, method 호출, construction mode, call or apply 호출
// * 어떤 객체에서 실행을 할 것인가라고 생각하면 쉬울 것 같음. 윈도우도 객체고 글로벌도 객체임.
// * 그래서 call, apply도 실행 문맥을 지정할 수 있는 메소드. 
// * 호출방법과 무관하게 this를 지정할 수 있는 방법  => bind

let obj = {
  name: "y",
  whoAmI: function () {
    console.log(this)
  }
}

obj.whoAmI()
let b = obj.whoAmI;
b()

let a = function () {
  console.log(this)
}
a()


