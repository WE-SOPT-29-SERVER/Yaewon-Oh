// 1. 함수 선언식
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));

// 2. 함수 표현식
const addStr = function (x, y) {
  return x + y;
};
console.log(addStr("안녕", "하세용"));

// 3. 화살표 함수
const add2 = (x, y) => {
  return x + y;
};

const add3 = (x) => {
  return x;
};

const add4 = () => {
  return 1;
};

// 로직 한 줄이면 return 생략 가능
const add5 = (x, y) => x + y;

// 매개변수 하나는 소괄호 생략 가능
const square = (x) => x * x;

// 객체 리턴 때에는 소괄호 감싸주기!
const person = (name, age) => ({ name: name, age: age });

const person = (name, age) => {
  return {
    name: name,
    age: age,
  };
};
