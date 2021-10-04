// 1. 배열 실습

let arr1 = [];
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

let arr3 = ["예원", 1, 2, 3, null, { name: "yaewon", age: 23 }];
console.log(arr3);
console.log(typeof arr3);

// 2. 배열 메서드
let arr = [1, 2, 3, 4];

// length
console.log(`arr의 길이 : ${arr.length}`);

// push, pop
arr.push("new");
console.log("arr push:", arr);
arr.pop();
console.log("arr pop:", arr);

// shift, unshift
arr.unshift("first");
console.log("arr unshift", arr);
arr.shift();
console.log("arr shift:", arr);

// include
console.log("arr.includes(4)", arr.includes(4));
console.log("arr.includes(100)", arr.includes(100));

// indexOf
console.log("arr.indexOf(4)", arr.indexOf(4));
console.log("arr.indexOf(100)", arr.indexOf(100));

// concat -> 배열 합치기
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatArr = arr1.concat(arr2);
console.log("arr1.concat(arr2):", concatArr);

// join -> 배열 스트링으로 만들기
let location = ["서울", "대전", "대구", "부산"];
console.log(location.join("-> "));

// reverse
console.log(location.reverse().join("-> "));

// sort
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // 되다 말았다.

console.log(
  countries.sort((a, b) => {
    return a.localeCompare(b); // 유니코드 기준 정렬
  })
);

console.log(
  "오름차순 정렬:",
  concatArr.sort((a, b) => a - b)
);
console.log(
  "내림차순 정렬:",
  concatArr.sort(function (a, b) {
    return b - a;
  })
);

// filter -> 배열 요소 대상으로 함수 호출 -> 배열 리턴
let number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
let minusNumber = number.filter((item) => item < 0);
console.log("minusNumber: ", minusNumber);

// map
let countries = ["Österreich", "Andorra", "Vietnam", "Korea", "China"];
let countriesLengths = countries.map((item) => item.length);
console.log("countriesLengths: ", countriesLengths);

// reduce -> 값 하나를 반환할 때 주로 사용
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = number.reduce((previousValue, currentValue) => {
  console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
  return previousValue + currentValue;
});

console.log("sum = ", sum);

// 순회
let serverPart = [
  "오예1",
  "오예2",
  "오예3",
  "오예4",
  "오예5",
  "오예6",
  "오예7",
];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. "';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ "';

for (let item in serverPart) {
  serverIndexStr += item + "! ";
}
console.log(serverIndexStr);

for (let item of serverPart) {
  serverPartMemberNameStr += item + "! ";
}
console.log(serverPartMemberNameStr);

serverPart.forEach((item) => {
  console.log(item);
});
