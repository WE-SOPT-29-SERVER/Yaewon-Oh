const fs = require("fs");

const numArr = [1, 2, 3, 4, 5];

// 동기 파일 쓰기 읽기
numArr.forEach((num) => {
  const title = "sync" + num;
  const data = `파일 내용 : '${title}.txt'`;
  fs.writeFileSync(`${title}.txt`, data);
  console.log(`${title} 순서에 맞다 ~.~`);
});

// numArr.forEach((num) => {
//     const title = 'sync' + num;
//     const data = fs.readFileSync(`${title}.txt`);
//     console.log(`${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${data}"\n`);
// });
