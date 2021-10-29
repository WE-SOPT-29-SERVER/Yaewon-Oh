const express = require("express");
const router = express.Router();
const users = require("../dbMockup/user");
const util = require("../lib/util");

const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");

router.post("/signup", (req, res) => {
  // 비구조화 할당(destructuring assginment)
  const { email, name, password } = req.body;

  // 파라미터의 잘못된 요청 값도 체크를 해줘야한다!
  if (!email || !name || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // users 속 배열안에 똑같은 이메일 값을 가진 유저가 있는가 체크
  const isExistUser = users.filter((obj) => obj.email === email).length > 0;
  if (isExistUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }
  // key와 value가 이름이 같으면 value 생략 가능이다.
  const user = { email, name, password };

  res
    .status(statusCode.OK)
    .json(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, user));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .json(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const isExistUser = users.filter((obj) => obj.email === email);
  if (isExistUser.length == 0) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(util.fail(statusCode.UNAUTHORIZED, responseMessage.NO_USER));
  }

  if (isExistUser[0].password !== password) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(util.fail(statusCode.UNAUTHORIZED, responseMessage.LOGIN_FAIL));
  }
  const user = { email: isExistUser[0].email, name: isExistUser[0].name };
  res
    .status(statusCode.OK)
    .json(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, user));

  // return : 아예 끝내버리는 => 보통 에러처리 시 씀
  // res : 뒤에 다른 일을 더 할 수 있는! => 보통 성공적일 때 씀
});

/*
router.get("/", (req, res) => {});
router.get("/:id", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});
*/
module.exports = router;
