/*
1. password.txt 읽기
2. crypto 모듈 이용해 암호화
3. hashed.txt에 쓰기
*/

const fs = require("fs");
const crypto = require("crypto");

const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iterations = 100000;
const keylen = 64;
const digest = "sha512";

// callback 안에 파일 쓰기 함수 넣는다.
const callback = (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
  fs.writeFile("hashed.txt", derivedKey.toString("hex"), (err, data) => {
    if (err) return console.log(err.message);
  });
};

// main
fs.readFile("./password.txt", "utf8", (err, data) => {
  const password = data.trim(); // 개행 문자 제거
  console.log(password);
  crypto.pbkdf2(
    password,
    salt,
    iterations,
    keylen,
    digest,
    (err, derivedKey) => {
      if (err) throw err;
      fs.writeFile("hashed.txt", derivedKey.toString("hex"), (err) => {
        if (err) return console.log(err.message);
      });
    }
  );
});
