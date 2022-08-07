---
title: "[4주차] [JavaScript] 핵심 개념과 주요 문법 - 3일차"
date: "2022-07-13T23:41:32.169Z"
category: blog
---

## ✨ 스코프
> : **변수 접근 규칙에 따른 유효 범위**

```JavaScript
let greeting = 'Hello';
function greetSomeone() {
  let firstName = 'Josh';
  return greeting + ' ' + firstName;
}
console.log(firstName)
```
1. firstName 변수가 함수 안쪽 정의 :arrow_right: 함수 바깥쪽에서 firstName으로 접근 불가능 (=ReferenceError)

📍 바깥쪽 스코프에서 선언한 변수는 안쪽 스코프에서 사용 가능

✅ 안쪽에서 선언한 변수는 바깥쪽 스포크에서 사용 불가능

2. 중첩 가능
"지역 변수는 전역 변수보다 더 높은 우선순위를 가진다"

```JavaScript
let name = '김코딩';

function showName() {
  let name = '박해커';
  console.log(name); // 2 '박해커'
}

console.log(name); // 1 '김코딩'
showName();
console.log(name); // 3 '김코딩'
```

2️번 출력에서 '김코딩'이 나오는 이유는 지역 name 변수를 새로 선언했기 때문에 전역에 있는 name 변수와는 다르다.

만약,
```JavaScript
let name = '김코딩';

function showName() {
  name = '박해커';
  console.log(name); // 2 '박해커'
}

console.log(name);// 1 '김코딩'
showName();
console.log(name);// 3 '박해커'
```
지역 name 변수를 새로 선언하지 않았다면 전역 name 변수와 같은 변수이기 때문에 '김코딩' 에서 '박해커'로 변경된다.
따라서, 3번 출력은 '박해커'가 된다.

## ✨ 스코프의 종류
> : **블록 스코프, 함수 스코프**

🔹 화살표 함수는 블록 스코프로 취급된다.

🔹 **var키워드**_
블록 스코프에서 block 범위를 벗어나도 같은 function scope에서는 사용이 가능하다.
따라서, var 보다는 let 으로 변수 선언을 하는 것을 권장한다.

<br>

## ✨ 클로저
> : **함수를 리턴하는 함수**
```JavaScript
const adder = function (x) {
  return function (y) {
    return x + y;
  }
}
```
✅ 내부 함수는 외부 함수에 선언된 변수에 접근 가능

✅ 클로저는 **모듈화**에 유리

<br>

## ✨ ES6 신규 문법

### 1.1. spread 문법
주로 배열을 풀어서 인자로 전달 or 배열을 풀어서 각각의 요소로 넣을 때 사용

```JavaScript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

sum(...numbers) // spread 문법
```

### 1.2. rest 문법
파라미터를 배열의 형태로 받아서 사용 (파라미터 개수가 가변적일 때 유용!)

```JavaScript
function sum(...theArgs) { // rest 문법
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
```

##
### 2. 구조분해할당
> : spread 문법을 이용하여 값을 해체 -> 개별 값을 변수에 새로 할당

```JavaScript
let arr = ['code', 'states']
let value = [
  ...arr,
  'pre',
  ...['course', 'student']
]

console.log(value)
```
...arr처럼 spread 문법을 이용해 값을 해체한다.
...['course', 'student']도 마찬가지이다.

결과적으로, 아래와 같은 값이 나오게 된다.
```JavaScript
['code', 'states', 'pre', 'course', 'student']
```

<br>

✨ JavaScript Koans에 대해서는 다른 포스트에 정리해두겠습니다.
##

> **정리**

✔️ 스코프의 의미와 적용 범위를 이해한다.

✔️ 스코프의 주요 규칙을 이해한다.

✔️ 전역 스코프와 지역 스코프의 차이를 이해한다.

✔️ 클로저 함수의 정의와 특징에 대해서 이해할 수 있다.

✔️ spread/rest 문법을 사용할 수 있다.

✔️ 구조 분해 할당을 사용할 수 있다.

👍👍👍
