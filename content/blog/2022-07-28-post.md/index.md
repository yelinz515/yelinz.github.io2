---
title: [6주차] Unit3 회고 - 4일차
date: "2022-07-28"
category: blog
---

## ☑️ fetchAPI
> fetch API는 위와 같이, 특정 URL로부터 정보를 받아오는 역할

## ☑️ 종합 퀴즈

### ✔️ 2.

```js
function handleClick() {
  console.log('버튼에 비동기 이벤트를 넣는 방법');
}

let button = document.createElement('button');
button.textContent = 'button';
document.body.append(button);
```

✅ 버튼에 비동기 이벤트를 추가하고 싶을 때_

비동기 이벤트를 연결하려면 함수 자체를 연결해야 한다.

```js
button.addEventListener('click', handleClick());
```
왜 틀렸을까?

위 코드는 함수 자체를 연결한 것이 아닌 handleClick 함수를 실행한 것을 연결하고 있기 때문에 정상적으로 작동하지 않는다.

그렇다면 어떻게 적어야 하는지...

```js
button.addEventListener('click', handleClick);
```
위 코드처럼 비동기 이벤트를 추가하면 된다.

여러가지 방법이 있으며, 아래 코드처럼 추가할 수도 있다.
```js
button.addEventListener('click', function() {
  handleClick();
})

button.addEventListener('click', () => {
  handleClick();
})
```

### ✔️ 6.

```js
setTimeout(function () {
  console.log('1초 후 실행');
}, 1000);
```

setTimeout함수는 비동기 함수이다.

✅ setTimeout의 첫 번째 전달인자에 실행할 콜백함수를 넣는다.
✅ setTimeout의 두 번째 전달인자에 값을 넣지 않아도 동작하지만, 따로 값을 주지 않았기 때문에 timer의 기능은 제한된다.

<br>

> ## 마무리 👀

**꾸준히 자기주도적 학습을 하고 새롭게 알게 된 내용을 바탕으로 TIL를 작성하겠습니다.** 😊