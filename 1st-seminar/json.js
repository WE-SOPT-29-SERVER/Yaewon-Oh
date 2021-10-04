const sopt = {
  name: "WE SOPT",
  slogan: "나는야 솝트",
  part: ["plan", "design", "android", "iOS", "server", "web"],
  number: 199,
  printName: function () {
    console.log("name : ", this.name);
  },
};

console.log("1. typeof sopt : ", typeof sopt);

console.log("2. sopt: " + sopt); // type으로 나옴
console.log("3. sopt: ", sopt); // 값으로 나옴ㅁ
console.log("4. ssopt: " + JSON.stringify(sopt));
