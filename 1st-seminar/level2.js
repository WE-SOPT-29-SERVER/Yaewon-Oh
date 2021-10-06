const myGroup = {
  people: [
    {
      name: "엘리예원",
      city: "수원",
      age: 18,
      hobby: "협곡가기",
    },
    {
      name: "필립효식",
      city: "인천",
      age: 23,
      hobby: "헬창인생살기",
    },
    {
      name: "똥근",
      city: "안산",
      age: 25,
      hobby: "눕기",
    },
  ],

  introduce: function () {
    console.log("안녕하세요 제 팀원들을 소개합니다");
    for (let p of this.people) {
      console.log(
        `하위 제이름은 ${p.name}, ${p.age}살이죠. 
        ${p.city}에 살고, 취미는 ${p.hobby}랍니다~ 소개 끝!`
      );
    }
  },
};

myGroup.introduce();
