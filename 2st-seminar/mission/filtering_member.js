const members = require("./member");

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let online = [];
      // array filter를 써도 된다.
      for (let member of members) {
        if (member.location == "online") online.push(member);
      }
      resolve(online);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let offline = [];
      for (let member of members) {
        if (member.location == "offline") offline.push(member);
      }
      resolve(offline);
    }, 500);
  });
};

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let ybs = [];
      for (let member of members) {
        if (member.group == "YB") ybs.push(member);
      }
      resolve(ybs);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let obs = [];
      for (let member of members) {
        if (member.group == "OB") obs.push(member);
      }
      resolve(obs);
    }, 500);
  });
};

// promise chaining 활용
getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);

// async - await 활용
const asyncQuiz = async () => {
  const online = await getOnline(members);
  const ob = await getOB(online);
  console.log(ob);

  const yb = await getYB(members);
  const offline = await getOffline(yb);
  console.log(offline);
};

asyncQuiz();
