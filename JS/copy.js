// * Array.prototype.slice 는 중첩구조복사를 제대로 수행할 수 없음 => 얕은 복사
// * Spread Operators, 이 연산자가 호출 되면, 내부적으로는 iterator-looping을 함.
// * 근데 어쨌든 스프레드 오퍼레이터도 얕은 복사임. 

// * 객체같은 경우는 object.assign을 쓰기도 하는데 이것도 얕은 복사. 
// ! 그래서 JSON.stringify, JSON.parse를 쓰거나, Object.create를 쓰기도 함. 
// 참조 링크 
// https://medium.com/watcha/%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%AC%EB%8F%84%EC%9E%88%EB%8A%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-2f7d797e008a

const arr = [1, 2, 3, 4]
const copied = [...arr];
const arrWithSlice = arr.slice()

console.log(copied) //[1,2,3,4]
console.log(arrWithSlice); //[1,2,3,4]



const nestedArr = [1, [2, [3]], 4]
const sliceCopied = nestedArr.slice();
const spreadCopied = [...nestedArr];
console.log(sliceCopied)
console.log(spreadCopied)



