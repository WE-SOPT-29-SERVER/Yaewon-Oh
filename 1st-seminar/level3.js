const members = require("./members")["members"];

// yb, ob 리스트에 나누기
let ybs = [];
let obs = [];

members.forEach((member) => {
  if (member.group == "YB") ybs.push(member.name);
  else obs.push(member.name);
});

const makeGroup = (number) => {
  // list suffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  shuffle(ybs);
  shuffle(obs);

  // 반올림 처리
  const numOfGroup = Math.round(members.length / number);

  const groups = new Array(numOfGroup);

  for (let i = 0; i < groups.length; i++) {
    groups[i] = new Array();
  }
  // ob 분배
  let index = 0;
  for (let ob of obs) {
    if (index >= groups.length) index = 0;
    groups[index].push(ob);
    index++;
  }

  // yb 분배 -> 상대적으로 숫자가 적은 뒷 조부터~
  index = groups.length - 1;
  for (let yb of ybs) {
    if (index < 0) index = groups.length - 1;
    groups[index].push(yb);
    index--;
  }

  console.log(`\n\n조가 완성 되었습니다. 총 ${numOfGroup}조 입니당 :)`);
  for (let idx in groups) {
    console.log(`${parseInt(idx) + 1}조 : ${groups[idx]}`);
  }
};
// 조에 몇 명 넣고싶은지 물어보기
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("한 조에 몇명을 두실래요? ", (number) => {
  makeGroup(number);
  reader.close();
});
