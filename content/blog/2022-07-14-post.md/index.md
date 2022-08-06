---
title: "[4주차] [JS/브라우저] DOM - 4일차"
date: "2022-07-14T23:41:32.169Z"
category: blog
---

# [JS/브라우저] DOM

## DOM(Document Object Model)

JS를 사용할 수 있으면, DOM으로 HTML을 조작할 수 있습니다. DOM이라는 구조를 기반으로, JavaScript로 프로그램을 작성하여 HTML을 조작합니다.

```
✨ <script> 요소를 추가하는 두 가지 방법
```

```
  1. <head> 요소에 추가하는 방법
  2. </body> 가 끝나기 전에 추가하는 방법
```

<br>

### DOM 구조 조회
```
console.dir(document.body) // DOM을 객체의 모습으로 출력
```
### 부모 요소에서 첫 자식 요소 조회

```
console.dir(document.body.children[1])
```

<br>

## CRUD(Create, Read, Update, Delete)

```
const tweetSelf = document.createElement('div') // div 생성
document.body.append(tweetSelf) // body에 추가
```

```
//id = container에 생성한 tweetSelf 요소를 추가
const container = document.querySelector('#container')
container.append(tweetSelf)
```

```
tweetSelf.classList.add('tweet') // 클래스 이름 추가
tweetSelf.textContent = 'self create'; // 실제 보여질 콘텐츠 내용 추가

tweetSelf.remove() // 마지막으로 삭제
```

<br>

## 이벤트 객체
함수를 작성하면 함수를 여러 번 재사용할 수 있다.

```JavaScript
let menus = document.querySelectorAll("button"); //모든 버튼을 가져옵니다.

let btnAmericano = menus[0];
let btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick; // for 문으로도 충분히 구현할 수 있는 내용입니다.

function handleClick() {
  // 아래의 빈칸(____)을 채우세요.
  let currentMenu = ____; // TODO
  console.log(currentMenu + "를 클릭하셨습니다.");
}
```

함수에 어떤 메뉴를 추가해도 menus 버튼을 누르면 모두 실행된다.
그렇다면..
사용자가 누른 버튼에 따라 출력되는 메뉴가 다르게 보이기 위한 코드는 무엇인가?

```JavaScript
function handleClick() {
  // 아래의 빈칸(____)을 채우세요.
  let currentMenu = event.target.textContent; // TODO
  console.log(currentMenu + "를 클릭하셨습니다.");
}
```

위 빈칸에 event.target.textContent로 적어주면 된다.

이벤트 함수에 매개변수로 event를 넣으면 여러 event를 한 번에 할당할 수 있다.
event.target은 실행된 event가 발생한 곳의 객체 주소를 담고 있다.

<br>

### onclick과 addEventLister의 차이점

onclick : 마지막 하나만 실행. 옛날 방식
addEventListener: 하나하나 차례대로 다 실행. 최근 더 많이 사용됨

<br>
<br>

> **종합퀴즈 오답노트**

9.
```JavaScript
function displayAlert() {
  alert('코드스테이츠에 오신 것을 환영합니다')
}
document.querySelector('#apply').onclick = displayAlert() // displayAlert() X
```
⚠️ 함수를 할당할 시에 함수의 실행 값을 할당하면 안됩니다.

```JavaScript
function displayAlert() {
  alert('코드스테이츠에 오신 것을 환영합니다')
}
document.querySelector('#apply').onclick = displayAlert // displayAlert() O
```
위 처럼 **함수 그 자체**를 할당해야 한다.

<br>

7.
```
✨ Q. aElement를 HTML에서 제거하기 위한 방법?
```
```
let aElement = document.createElement('a')
aElement.setAttribute('id', 'javascript') 
aElement.textContent = 'awesome'
```
여기서 
```
setAttribute(name, value)
```
name: 값을 설정할 속성의 이름을 지정
value: 속성에 할당할 값

그래서 id가 javascript라는 뜻이다.

<br>

> 보기

```h
//오답
A. document.deleteNode(aElement) //deleteNode라는 메서드 없음

//C와 D는 world 엘리먼트를 전부 지움
C. document.querySelector("#world").remove()
D. document.querySelector("#world").remove(aElement)
```

정답은..

```h
B. aElement.remove() //aElement 제거
E. document.querySelector("#world").removeChild(aElement) //world 엘리먼트의 자식 요소인 aElement 제거
```

<br>

3.
```
✨ Q. <div>요소를 전부 조회하는 방법?
```

```
<body>
   <div>
    <div>hello</div>
    <div>world</div>
    <span>code</span>
    <span>states</span>
  </div>
</body>
```
<br>

> 보기

```
// 오답
A. document.querySelector('div') // 최상단 <div>요소 하나만 조회
C. document.getElementById('div') // id가 <div>요소 하나를 조회
E. document.getElementsByClassName('div') // class가 <div>요소 여러 개를 조회합니다.
```

정답은..

```
B. document.getElementsByTagName('div') // tag가 <div>요소 여러 개를 조회합니다.
D. document.querySelectorAll('div') // <div>요소 모두 조회
```

<br>

> 그렇다면..

```
✨ Q. 위 HTML에서 <div>요소를 조회하였다면, 조회한 <div> 개수는?
```

**부모, 자식 관계와 관계 없이** 모든 div 요소를 선택하기 때문에 총 3개이다.