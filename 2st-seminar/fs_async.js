const fs = require("fs");

const numArr = [1, 2, 3, 4, 5];

// 비동기 파일쓰기 읽기
numArr.forEach((num) => {
  const title = "async" + num;
  const data = `파일 내용 : '${title}.txt' `;
  fs.writeFile(`${title}.txt`, data, (err, data) => {
    if (err) return console.log(err.message);
    console.log(`${title} : 비동기 방식이라 순서가 뒤죽박죽 박박디라`);
  });
});

// numArr.forEach((num) => {
//     const title = 'async' + num;
//     fs.readFile(`${title}.txt`, (err, data) => {
//         if (err) return console.log (err.message);
//         console.log(`${title}.txt 내용\n"${data}"\n`);
//     });
// });
