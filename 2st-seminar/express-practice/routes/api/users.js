const express = require("express");
const router = express.Router();

// 안에 로직은 신경쓰지 않도록합니다...

/**
 * [GET]
 * api/users/login
 */
router.get("/login", (req, res) => {
  const result = {
    status: 200,
    msg: "api/blog/post 라우팅을 만들었습니다~",
  };
  res.status(200).send(result);
});

/**
 * [GET]
 * api/users/signup
 */
router.get("/signup", (req, res) => {
  const result = {
    status: 200,
    msg: "api/blog/post 라우팅을 만들었습니다~",
  };
  res.status(200).send(result);
});
module.exports = router;
