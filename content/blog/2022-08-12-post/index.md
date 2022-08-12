---
title: "[8주차] Refactor Express - 5일차"
date: "2022-08-12"
---

### Express 간단한 웹 서버 만들기

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

<br>

### 라우팅: 메서드와 url에 따라 분기(Routing)하기

**Node.js**로 라우팅을 구현한 코드는 이렇다.

```js
const requestHandler = (req, res) => {
  if(req.url === '/lower') {
    if (req.method === 'GET') {
      res.end(data)
    } else if (req.method === 'POST') {
      req.on('data', (req, res) => {
        // do something ...
      })
    }
  }
}
```

메서드와 url(`/lower`, `/upper` 등)로 분기점을 만드는 것을 **라우팅(Routing)** 이라고 한다.

반면에 **Express**는 프레임워크 자체에서 라우터 기능을 제공합니다. Express의 라우터를 활용하면 아래와 같이 직관적인 코드를 작성할 수 있다.

```js
const router = express.Router()

router.get('/lower', (req, res) => {
  res.send(data);
})

router.post('/lower', (req, res) => {
  // do something
})
```

<br>

### ✔️ Express 미들웨어를 사용하는 상황

1. POST 요청 등에 포함된 body(payload)를 구조화할 때(쉽게 얻어내고자 할 때)
2. 모든 요청/응답에 CORS 헤더를 붙여야 할 때
3. 모든 요청에 대해 url이나 메서드를 확인할 때
4. 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때 

#### case 1: POST 요청 등에 포함된 body(payload)를 구조화할 때

```js
const jsonParser = express.json();

// 생략
app.post('/api/users', jsonParser, function (req, res) {

})
```

Express 내장 미들웨어인 express.json()을 사용한다.

#### case 2: 모든 요청/응답에 CORS 헤더를 붙일 때

```js
npm install cors
```

```js
// 모든 요청에 대해 CORS 허용
const cors = require('cors');

// 생략
app.use(cors());
```

```js
// 특정 요청에 대해 CORS 허용
const cors = require('cors')

// 생략
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
```

#### case 3: 모든 요청에 대해 url이나 메서드를 확인할 때

```js
const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next(); // 다음 미들웨어를 실행하는 역할
};

//app.use는 모든 요청에 동일한 미들웨어를 적용
app.use(myLogger);
```

#### case 4: 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때

```js
app.use((req, res, next) => {
  // 토큰이 있는지 확인, 없으면 받아줄 수 없음.
  if(req.headers.token){
    req.isLoggedIn = true;
    next();
  } else {
    res.status(400).send('invalid user')
  }
})
```

<br>

### Mini Node Server - Express

어제 **Mini Node Server**라는 과제를 HTTP 모듈로 작성했었다. 
오늘은 프레임워크 Express를 이용하는 방식으로 리팩토링할 것이다.

Express는 **프레임워크 자체에서 라우터 기능을 제공**하고, **Express 내장 미들웨어인** `express.json()`를 사용하고, **cors 미들웨어**를 사용하면 HTTP 모듈 보다 과정을 간단하게 처리할 수 있다.

#### basic-server.js

```js
const express = require('express')
const router = express.Router()
const jsonParser = express.json({strict: false});
const cors = require('cors');

const app = express()
const port = 4999

const myLogger = function (req, res, next) {
  console.log(
    `http request method is ${req.method}, url is ${req.url}`
  );
  next();
};
app.use(myLogger);
app.use(cors()); // 모든 요청에 동일하게 CORS 적용

app.get('/',(req, res) => {
  res.send('success')
})

app.post('/lower', jsonParser, (req, res) => {
  res.json(req.body.toLowerCase());
})


app.post('/upper', jsonParser, (req, res) => {
  res.json(req.body.toUpperCase());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```