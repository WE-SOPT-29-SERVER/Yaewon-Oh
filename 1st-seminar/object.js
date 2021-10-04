// Object 생성자 함수
const person = new Object();

// 프로퍼티 추가
person.name = "오예원";
person.part = "Server";
person["group"] = "OB";
person.sayHello = () => {
  console.log(`안냐세요. ${this.name} 입니다`);
};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("==================");

// 객체 리터럴
const emptyObject = {}; // 빈 객체
console.log(typeof emptyObject);

const animal = {
  animalType: "dog",
  animalName: "뽀삐",
  animalFriends: ["별이", "다을이", "복덩"],
  bark: function () {
    console.log(`${this.animalName}: 멍멍멍`);
  },
  thisFriends: function () {
    this.animalFriends.forEach((friend) => {
      console.log(`${this.animalName}의 친구: ${friend}`);
    });
  },
};

console.log(animal);
animal.bark();
animal.thisFriends();
