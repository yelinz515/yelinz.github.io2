---
title: "[5주차] [JavaScript] 고차 함수 - 4일차"
date: "2022-07-21T23:41:32.169Z"
category: blog
---

### 고차 함수

* 오늘 공부한 내용
* 어려웠던 내용
* 궁금한 내용과 부족한 내용 
* 느낀점
***

### ✨  오늘 공부한 내용

#### 고차 함수
> **함수를 리턴하는 함수, 함수를 전달인자로 받는 함수(=커링 함수)**

이때 
다른 함수의 전달인자로 전달되는 함수 : **콜백 함수(callback function)**

* 콜백 함수를 전달받은 고차 함수는, 함수 내부에서 이 콜백 함수를 호출할 수 있다.
* 아예 호출하지 않을 수도 있고, 여러 번 실행할 수 있다.

<br>

**📍 for...of vs for...in**
* for...of : 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복

```js
for(let i =0; i<arr.length; i++){
}    
```

위처럼 쓰지 않아도 아래 코드로 쓰면 대입받은 변수를 이용하면 루프 안에서 객체의 열거할 수 있는 프로퍼티에 순차적으로 접근할 수 있습니다.

```js
for (variable of iterable) {
  statement
}  
```

* for...in :  객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복

자세한 내용은 아래 링크를 눌러주세요!
출처 : [YJUN IT BLOG:티스토리](https://yjshin.tistory.com/entry/JavaScript-자바스크립트-for-문-for-in-문-for-of-문).

<br>

#### 내장 고차 함수

#### filter
> **주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.**

#### map
> **배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다**

#### reduce
> **배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.**

**📍 리듀서 함수는 네 개의 인자를 가집니다.**

* 누산기 (acc)
* 현재 값 (cur)
* 현재 인덱스 (idx)
* 원본 배열 (src)

리듀서 함수의 반환 값은 **누산기에 할당**되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 **하나의 값**이 됩니다

<br>

### ✨  어려웠던 내용

고차 함수 코플릿 몇 문제가 어려웠다.

<br>

### ✨  부족한 내용

내장 고차 함수 대표 3가지인 filter, map, reduce를 자주 연습해야겠다.
하다보면 익숙해질 것이다.

#### ✅ 4.

```js
function calcuate(x, y, z){
	const plus = function (num1, num2){
		return num1 + num2;
	}
	return plus(x, y) * z
}
```
위 코드는 함수를 전달인자로 받지 않고 있고, 함수를 리턴하고 있지 않아서 고차함수가 아니다.

```js
function calculate(x, y){
	return function(){
		return x * y;
	}
} 
```
위 코드처럼 함수를 전달인자로 받지 않아도 함수를 리턴하기 때문에 고차함수이다.

#### ✅ 8.

```js
const summary = function (acc, cur) {
return acc + cur + ' ';
};

const contents = ['미들웨어를 통해 강력한 API를 작성할 수 있다.', 'HTTP 유틸리티 메소드를 제공한다.', 'NestJs는 Express 기반이다.', 'Express는 OpenJS 기반의 프로젝트이다.'];
let output = contents.reduce(summary);
console.log(output);
```

지금 reduce 메서드를 통해 함수를 접근하고 있는데, 두 번째 전달인자에 초기값이 주어지지 않아 배열 contents의 첫 번째 요쇼인 '미들웨어를 통해 강력한 API를 작성할 수 있다.' 가 리턴된다.