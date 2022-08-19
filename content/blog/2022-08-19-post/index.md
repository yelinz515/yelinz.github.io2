---
title: "재귀(recursion) 함수"
date: "2022-08-19"
---

### 재귀(recursion)
: 원래의 자리로 되돌아가거나 되돌아옴.

<br>

#### 예시
---

#### #1

```js
function arrSum(arr) {
  // base case : 문제를 더 이상 쪼갤 수 없는 경우 (재귀의 기초)
  if (arr.length === 0) {
    return 0;
  }

  // recursive case : 그렇지 않은 경우
  return arr[0] + arrSum(arr.slice(1));
}

arrSum([1,2,3,4,5]) //15
```

`arr[0]`은 첫 번째 요소, `arrSum(arr.slice(1))`은 첫 번째 요소를 제외하고 자기 자신을 호출을 반복한다. 

그 결과, `1 + [2,3,4,5]`, `2 + [3,4,5]`, `3 + [4,5]`, `4 + [5]`, `5 + [ ]`가 되어 `arr.length === 0`에 속해 `0`을 반환하면 `5 + 0` , `4 + 5`, `3 + 9`, `2 + 12`, `1 + 14`해서 최종적으로 `15`가 나온다.

![Chinese Salty Egg](./recursive.gif)

이 그림을 보니까 더 잘 이해가 되는 것 같다.



#### #2

```js
// factorial 문제
function factorial(n) {
    if(n ===1){
        return 1;
    }
    return n * factorial(n-1);
}

fac(4) // 24
```

`return 4 * fac(3)`, `return 3 * fac(2)`, `return 2 * fac(1)`이 되고, `fac(1)`은 `1`이기 때문에 다시 그 결과를 거슬러 올라가면 `2 * 1`, `3 * 2`, `4 * 6`해서 최종적으로 `24`가 나오게 된다.

이것이 재귀 함수이다.

<br>

### 코플릿

오늘 재귀 코플릿을 풀면서 어려웠던 문제들이 많았다. 헷갈렸던 문제들을 다시풀어보고 풀이하도록 하겠다.

#### 02_isOdd
---

```js
function isOdd(n) {
    // 만약 0이면 짝수
    if(n === 0){
        return false;
    }
    // 만약 1이면 홀수
    if(n === 1){
        return true;
    }
    // 먄약 n이 음수이면 양수로 변환
    if(n < 0>){
        return isOdd(-num)
    }
    return isOdd(n-2);
}

let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false
```

#### 08_drop

#### 09_take

#### 12_reverseArr
---
```js
function reverseArr(arr) {
    // 배열이 0인 경우 빈 배열을 리턴한다.
    if(arr.length === 0){
        return [];
    }
    //
    return [arr[arr.length -1]].concat(reverseArr(arr.slice(0, arr.length -1)));
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]
```

`[3], [1, 2]`, `[2],[1]`, `[1],[ ]`가 되고 `arr[arr.length -1]`와 연결하면 `[1]`, `[2, 1]`, `[3, 2, 1]`해서 최종적으로 `[3, 2, 1]`가 된다.

#### 15_flattenArr
---

```js
function flattenArr(arr) {
    // 배열이 0인 경우 빈 배열을 리턴한다.
    if(arr.length === 0){
        return [];
    }

    //배열 안이 배열인 경우 재귀 함수를 통해 1차원 배열로 변환한다.
    if(Array.isArray(arr[0])){
        return flattenArr([...arr[0], flattenArr(arr.slice(1))])
    }
    return [arr[0]].concat(flattenArr(arr.slice(1)));
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]
```

~다시공부~
`[1, [2, [3, 4], 5]`, `[2, [3, 4], 5]`, `[3, 4, [5]]`, `[5]`가 되고, 

다시 정리하면 `[3, 4, 5]`, `[2, 3, 4, 5]`, `[1, 2, 3, 4, 5]`해서 최종적으로 `[1, 2, 3, 4, 5]`가 나온다.


