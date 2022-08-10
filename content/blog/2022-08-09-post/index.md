---
title: "[8주차] React lifting state up - 1일차"
date: "2022-08-09"
---

### ☑️ React 데이터 흐름

페이지를 만들기 이전에, 컴포넌트를 먼저 만들고 조립한다. 상향식으로 앱을 만들면 테스트가 쉽고 확장성이 좋다.

#### ✔️ 단방향 데이터 흐름(one-way data flow)

상태를 최소화하는 것이 가장 좋으며,

#### ✔️ Lifting state / 하향식 데이터 흐름(Top-down data flow)

보통 state는 rendering을 위해서 component에 추가되는데,
만약 다른 component도 함께 state를 필요로하면
그 component들의 공통된 부모 component로 state를 끌어올린다.

부모 component에서 관리하게 되는것이다. 이것이 하향식 데이터 흐름를 활용하는 방법이다.

**장점 : 
bug가 줄고, 관리하는 로직 수정이 쉬움.**

📍 만약 UI에서 잘못된 값이 render 된 부분을 발견한다면
해당 data, 즉 props가 어떠한 부모 component로부터 왔는지
component tree의 상위를 탐색하여 파악할 수 있다.
그 결과, bug를 쉽게 발견하여 고칠 수 있다.

<br>

> ### 마무리 👀

지금 States Airline이라는 관련 과제를 하고 있다. 내일 part2까지 과제가 마무리되면 다음 포스트에는 과제 관련 포스트를 올려야겠다.