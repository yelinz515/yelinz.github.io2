---
title: JavaScript Koans
date: "2022-07-13T23:41:32.169Z"
category: blog
image:  07.jpg #upload?
---

# JavaScript koans를 풀었던 과정과 새롭게 알게 된 것😄

## 01_Introduction.js

✨ **expect** 함수
> **테스트하는 값과 기대값을 비교**

```JavaScript
expect(1 + 2).to.equal(3); // 'sum(1, 2)의 결과값은 3과 같아야(equal) 한다'
```
<br>

## 04_Scope.js

✨ 함수 선언식(declaration)과 함수 표현식(expression)의 차이

```JavaScript
function funcDeclared() {
  return 'this is a function declaration';
}

console.log(typeof funDeclared) // 'function'
```

```JavaScript
funcExpressed = function () {
  return 'this is a function expression';
};

console.log(typeof funExpressed) // 'string'
```

✨ 자바스크립트 함수 호이스팅(hoisting)
> **인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것**

"변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는 것" 이라고 주로 설명할 수 있다.


✨ lexical scope
자바스크립트는 함수가 호출되는 환경와 별개로, 기존에 선언되어 있던 환경 - 어휘적 환경 - 을 기준으로 변수를 조회하려고 함.

<br>

## 05_ArrowFunction.js

✨ 화살표 함수 사용법
* function 키워드를 생략하고 화살표 => 를 붙인다.
```JavaScript
const add = (x, y) => {
      return x + y
    }
```

* 리턴을 생략할 수 있습니다
```JavaScript
const subtract = (x, y) => x - y
```

### 💡 원본 변경 메서드 vs 간접 변경 메서드
### 1. 원본 변경 메서드
* push()
* pop()
* shift()
* unshift()
* splice()

### 2. 간접 변경 메서드
* slice() // slice(0) === slice()
* concat()
* join()

```JavaScript
 const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

 const copiedArr = arr.slice();
    copiedArr[3] = 'changed in copiedArr';
    expect(arr[3]).to.equal('three'); //원본 변경이 아닌 간접 변경!
```
slice() 메서드가 간접 변경 메서드이기 때문에 원본이 변경 되지 않는다.
따라서, 'changed in copiedArr'가 아닌 'three'가 정답이다.

<br>

## 06_Types-part2.js
```JavaScript
if(arr === []) {
} //false
```
참조 자료형인 배열, 객체, 함수는 주소를 변수에 할당하기 때문에 우리가 보기에 요소가 같더라도 실제로 heap에 저장되어 있는 값은 다르다는 것이다.
이 부분에 대해 배우지 않았다면, 위 코드가 왜 틀렸는지 몰랐을 것이다.

<br>

## 08_Object.js

✨ **깊은 복사와 얕은 복사**
* **Array.prototype.slice** : 배열을 깔끔하게 복사할 때 사용. 
start와 end가 주어지지 않으면 전체 배열을 복사한다.
  ```JavaScript
  const arr = [ 1, 2, 3, 4, 5]
  const copyArr = arr.slice();
  checker(arr, copyArr) //true
  checker(arr, copyArr) //false
  ```

  단점은..
  **중첩 구조 복사를 제대로 수행할 수 없다**.
  원본과 복사본 모두 영향을 받기 때문에 **얕은 복사**를 수행한다. 따라서, 모든 값을 독립적으로 복사할 수 없다.
  ```JavaScript
  const arr = [ 1, 2, 3, [4, 5]]
  const copyArr = arr.slice();
  checker(arr, copyArr) //true
  checker(arr, copyArr) //true
  ```

* **Object.assign()** : 객체를 복사할 때 사용.
메서드의 첫번째 인수로 빈 객체를 넣어주며, 두번째 인수로 할당할 객체를 넣으면 된다.
열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다.

  ```JavaScript
  const game = { AOS: "League of Legend" };
  const game2 = { Sim: "DCS Worlds" };
  const game3 = { VR: "Half-Life: Alyx" };

  const myGames = Object.assign(game, game2, game3);
  myGames // {AOS: "League of Legend", Sim: "DCS Worlds", VR: "Half-Life: Alyx"}
  ```

  단점은..
  **2차원 객체는 깊은 복사가 이루어지지 않는다.** 
  ```JavaScript
  const obj = {
    a: 1,
    b: {
      c: 2,
    },
  };

  const newObj = Object.assign({}, obj);

  newObj.b.c = 3;

  console.log(obj); // { a: 1, b: { c: 3 } }
  console.log(obj.b.c === newObj.b.c); // true

  // 전개 연산자
  const newObj = { ...obj };

  newObj.b.c = 3;

  console.log(obj); // { a: 1, b: { c: 3 } }
  console.log(obj.b.c === newObj.b.c); // true
  ```
  전개 연산자를 활용해도 2차원 객체는 얕은 복사가 되는 것을 확인할 수 있다.

<br>

> **정리**

✔️ 자바스크립트 핵심 개념과 주요 문법에 대해 이해할 수 있었다.

✔️ 복습하며 완벽하게 아는 것이 중요하다.