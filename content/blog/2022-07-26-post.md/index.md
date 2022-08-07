---
title: "[6주차] underbar - 2일차"
date: "2022-07-26T23:41:32.169Z"
category: blog
---

## ☑️ Bare Minimum Test

underbar 라는 과제를 하는 이유는 고차함수에 대해 더욱 깊게 이해하기 위해 시작했다.


#### 📍 핵심 키워드

* callback function -> 전달인자로 들어가는 함수
* _.filter, _.map, _.reduce, _.foreach를 직접 만들어 callback

### ✔️ _.foreach
> forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행

```js
arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```

세 가지 매개변수를 받는다는 것과 반환 값이 없다는 것이 특징이다.

### ✔️ _.indexOf

```js
_.indexOf = function (arr, target) {
  // 배열의 모든 요소에 접근하려면, 순회 알고리즘(iteration algorithm)을 구현해야 합니다.
  // 반복문을 사용하는 것이 가장 일반적이지만, 지금부터는 이미 구현한 _.each 함수를 활용하여야 합니다.
  // 아래 _.indexOf의 구현을 참고하시기 바랍니다.
  let result = -1; 

  _.each(arr, function (item, index) {
    if (item === target && result === -1) { // -1인 이유 : 반복되는 숫자의 두번 째 인덱스를 가져오지 않기 위해 사용
      // 없는 값도 -1을 반환
      result = index; // 이 값에 따라 let result = -1; 값도 달라짐
    }
  });

  return result;
};
```

<br>

> ## 마무리 👀

고차함수의 끝판왕을 맛 본 것 같다. 연습 많이 해야겠다!!!

❤️진짜 정신차리고 열심히 하자!!❤️

**꾸준히 자기주도적 학습을 하고 새롭게 알게 된 내용을 바탕으로 TIL를 작성하겠습니다.** 😊