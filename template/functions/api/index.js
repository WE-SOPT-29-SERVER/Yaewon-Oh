const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const hpp = require('hpp');
const helmet = require('helmet');

dotenv.config();

const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(hpp());
  app.use(helmet());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 라우팅
app.use('/', require('./routes'));

app.use('*', (req, res) => {
  res.status(404).json({
    status: 404,
    success: false,
    message: '잘못된 경로입니다',
  });
});

// express를 firebase로 감싸주는 코드
module.exports = functions
  .runWith({
    timeoutSeconds: 300, // 요청 처리 300초 초과하면 타임아웃
    memory: '512MB', // 서버 할당 메모리
  })
  .region('asia-northeast3') // 서버 돌아갈 region. 여기는 서울
  .https.onRequest(async (req, res) => {
    // 들어오는 요청에 대한 로그 콘솔에 찍기 -> 디버그 시 유용
    // 파베 콘솔에 찍고 싶은 내용을 여기에 원하는 대로 추가하기
    console.log('\n\n', '[API]', `[${req.method.toUpperCase()}]`, req.originalUrl, req.body);

    // 위에 선언된 express app 객체 리턴
    // functions/index.js 속 require("./api")에 들어간다.
    return app(req, res);
  });
