// ! closure는 외부함수의 변수에 접근하는 내부함수 혹은 그 메커니즘을 일컫는 용어

function outer() {
  let content = "this is what closure means! WOW"
  function inner() {
    console.log(content)
  }
  inner();
}
outer();

function a() {
	let name = "Jake";
	function showName() {
		let name = "Merry";
		console.log(name);
	}

	console.log(name);
	showName();
	console.log(name);
}
a();

function factory(a) {
  return {
    get: function () {
      return a;
    },
    set: function (_a) {
      a = _a;
    }
  }
}

let res = factory("hi")
let result = factory("love")

console.log(res.get());
console.log(result.get());

res.set("하이")
result.set("사랑")

console.log(res.get());
console.log(result.get());