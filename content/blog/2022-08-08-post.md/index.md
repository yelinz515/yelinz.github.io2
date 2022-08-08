---
title: "프론트에서 서버에 데이터 요청하기"
date: "2022-08-08"
---

유투브에서 우연히 영상을 보았다.
직접 server와 client 간의 데이터를 주고받는 법을 배울 수 있었다.

### ☑️ server 파일과 client 파일 생성

#### ✔️ server 파일

```
npm i express
```
pacakage.json 파일이 생성된다.

🔹 서버 실행
```
node app.js
```

#### ✔️ client 파일

```
npx create-react-app
```

🔹 react 실행화면 보기
```
npm start
```

#### ✔️ CORS

실제로 데이터베이스가 없을 때 직접 서버를 구축하고 postman을 통해서 데이터를 어떻게 주고 받는지 알 수 있었다.

중간에 server와 client 포트가 달라서 ccess-Control-Allow-Origin 헤더가 요청된 리소스에 없다면서 CORS 정책을 위반해서 나온 에러가 떴다.

**CORS 정책을 위반하여 서로 다른 출처를 가진 상태에서 무언가를 요청하게 되면 브라우저가 보안 상의 이유로 차단을 해버린다!**

해결:

🔹 **CORS 미들웨어 사용하기**

```
<!-- app.js -->

var cors = require('cors')

app.use(cors())
```

위 코드를 추가해주면 된다.

📍 하지만, app.use(cors()) 이런 식으로 하게 되면 모든 출처에서 오는 요청을 허용하는 것이므로 지양하자.

<br>

> ### 마무리 👀

지금까지 배운 교육과정을 통틀어 사용할 수 있어서 유익한 시간이었다. 

이렇게 글을 남기는 이유도 'to do list'처럼 다양한 컨셉으로 직접 스스로 서버를 구축하고, react로 웹사이트를 디자인하는 시간을 자주 가지면서 fetch, useState, useEffect, map 함수, css 속성 등을 익숙하게 다룰 수 있을 것 같다.