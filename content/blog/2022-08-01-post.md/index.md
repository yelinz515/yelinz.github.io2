---
title: "[7주차] React SPA - 1일차"
date: "2022-08-01T23:41:32.169Z"
category: blog
---

###  React

> **프론트엔드 개발을 위한 자바스크립트 오픈소스 라이브러리**

### React SPA

> 서버로부터 완전히 새로운 페이지를 불러오는 것이 아니라, 화면을 업데이트하기 위해 **필요한 데이터만 서버에서 전달받아** 브라우저에서 해당하는 부분만 업데이트하는 방식으로 작동하는 웹 애플리케이션이나 웹 사이트

#### ✔️ SPA 방식으로 만들어진 서비스

* Youtube
* facebook
* Gmail
* airbnb
* Netflix

### React Router

> 라우팅에 따라 다른 뷰를 보여주기 위 React Router 라이브러리 사용

* 라우팅 : 다른 주소에 따라 다른 뷰를 보여주는 과정을 "경로에 따라 변경한다."라는 의미

#### ✅ React Router 주요 컴포넌트
```js
* <BrowerRouter> // 라우터 역할
* <Routes> // 경로 매칭
* <Route> // 경로 매칭
* <Link> //경로 변경
```

<br>

***

### 개발 환경 구축하기

```js
npm install react-router-dom@^6.3.0
```

React Router를 설치하고

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

React Router 라이브러리가 제공하는 컴포넌트들을 사용하기 위한 세팅을 진행한다.

📍 `<BrowserRouter>`를 사용할 때 `<BrowserRouter>`가 상위에 작성되어 있어야 React Router의 컴포넌트들을 사용할 수 있습니다