---
title: "[7주차] React Twittler State & Props 후기(수정) - 3일차"
date: "2022-08-03T23:41:32.169Z"
category: blog
description:
---

## ☑️ App.js

(파일 스스로 풀어보고 -> 이해 -> 블로깅)
## ☑️ Tweets.js

## ☑️ Tweet.js

## 🔹 State

> 내부에서 변화하는 값.
컴포넌트의 사용 중 컴포넌트 내부에서 변할 수 있는 값

### ✔️ useState

```js
const [state 저장 변수, state 갱신 함수] = useState(상태 초기 값);
```

```js
const [isChecked, setIsChecked] = useState(false);
```

useState 를 호출한다는 것은 "state" 라는 변수를 선언하는 것과 같으며, 이 변수의 이름은 아무 이름으로 지어도 된다.

## 🔹 Props

> 외부로부터 전달받은 값

함부로 변경될 수 없는 읽기 전용 객체

# ☑️ React 데이터 흐름

### ✔️ 상향식으로 앱을 만들기

기획자나 PM, 또는 UX 디자이너로부터 앱의 디자인을 전달받고 나면, 이를 컴포넌트 계층 구조로 나누는 것이 가장 먼저 해야 할 일이다.

### ✔️ 데이터는 위에서 아래로 흐른다

데이터를 전달하는 주체는 부모 컴포넌트가 된다. 이는 데이터 흐름이 **하향식(top-down)** 임을 의미한다.

📍 사실 상태는 최소화하는 것이 가장 좋다. 상태가 많아질수록 애플리케이션은 복잡해지기 때문이다.
