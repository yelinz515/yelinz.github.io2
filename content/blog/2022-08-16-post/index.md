---
title: "StatesAirline API Server"
date: "2022-08-15"
---

Express 프레임워크로 StatesAirline API Server 구현하는 과제를 해보았다.

### ✅ 과제 시작 전

Express 공식문서에서 `req.query` , `req.params`를 사용하는 방법을 확인할 것이다.

#### req.query

```js
// localhost:3000/topic?id=1&name=foo
app.get('/topic', function(req, res) {
    res.send(req.query.id + ',' + req.query.name);
})
```

위 코드는 id과 name 값을 동시에 가져올 수 있다. `localhost:3000/topic?id=1&name=foo` 에 들어간다고 가정하자. 화면에 `1,foo` 가 보일 것이다.

```js
// localhost:3000/topic?id=1
app.get('/topic', function(req, res) {
    var topics = [
        'JavaScript is ....',
        'Nodejs is ....',
        'Express is ....',
    ];
    res.send(topics[req,query.id]);
    })
```

위 코드는 배열로 값들을 가져온다. `localhost:3000/topic?id=1` 에 들어간다고 가정하면, id가 1이기 때문에` topic[1]`인 `Nodejs is....`가 화면에 보인다.

실제로는 `topics`에 파일이나 데이터베이스로 교체해서 짧은 코드로 값을 가져올 것이다.

#### req.params

```js
//localhost:3000/page/CSS
app.get('page/:pageId', function(req, res) {
    res.send(req.params);
})
```

`localhost:3000/page/CSS`에 들어간다고 하면 아래와 같은 결과가 나올 것이다.

```js
{"pageId : "CSS"}
```

`req.params`안에는 객체가 들어가 있고, 그 객체의 **pageId** 프로퍼티 값을 통해서 **CSS**라는 값을 가져온다는 뜻이다.

```js
//localhost:3000/page/CSS/WEB
app.get('page/:pageId/:chaperId', function(req, res) {
    res.send(req.params);
})
```

```js
{"pageId" : "CSS", "chaperId": "WEB"}
```

### ✅ StatesAirline-Server(수정)

* `app.use`의 위치가 굉장히 중요하다.
* `req.query` -> 쿼리 파라미터
* `req.params` -> path 파라미터

#### flightController.js

```js
const flights = require('../repository/flightList');
const fs = require('fs');
const app = require('../app');

module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // TODO:
    if(departure_times && arrival_times){
      const filtered = flights.filter((item) => {
        return item.departure_times === departure_times && item.arrival_times === arrival_times;
      })
      return res.json(filtered);
    }
    if(destination && departure){
      const filtered = flights.filter((item) => {
        return item.destination === destination && item.departure === departure;
      })
      return res.json(filtered);
    }
    return res.json(flights);
  },
  // [GET] /flight/:uuid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // TODO:
    if(uuid){
      const filtered = flights.filter((item)=> {
        return item.uuid === uuid;
      })
      return res.json(filtered);
    }
  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;
    // req.body는 default 값으로 Undefined 설정되기 때문에 json parser를 해야한다.
     // TODO
     if(uuid){
      const filtered = flights.filter((item) => {
        return item.uuid === uuid;
      })
      // filtered[0]해준 이유는 filtered는 '하나의 객체를 가지고 있는 배열'이기 때문이다
      let obj = Object.assign(filtered[0], bodyData); //filtered[0] + bodyData
        return res.json(obj);
    }
  }
};

      // filtered = [{"arrival_times": "2021-12-04T12:00:00", 
      // "departure": "CJU", "departure_times": "2021-12-03T12:00:00", 
      // "destination": "ICN", 
      // "uuid": "af6fa55c-da65-47dd-af23-578fdba99bed"}]
```

#### bookController.js

```js
// POST /book에서 사용할 uuid입니다.
const { v4: uuid } = require('uuid');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 예약 데이터를 조회합니다.
  findAll: (req, res) => {
    return res.status(200).json(booking);
  },
  // [GET] /book/:phone 요청을 수행합니다.2
  // 요청 된 phone과 동일한 phone 예약 데이터를 조회합니다.
  findByPhone: (req, res) => {
    const {phone} = req.params;
    // TODO
    // router.get('/:phone', findByPhone);
    let list = booking;
    if(phone){
      list = list.filter((item) => {
        return item.phone === phone
      });
      return res.json(list);
    }
  },
  // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.3
  // 요청 된 id, phone과 동일한 uuid, phone 예약 데이터를 조회합니다.
  findByPhoneAndFlightId: (req,res) => {
    const {phone, flight_uuid} = req.params;
    // TODO:
    //router.get('/:phone/:flight_uuid', findByPhoneAndFlightId);

    let list = booking;
    if(flight_uuid){
      list = list.filter((item) => {
        return item.flight_uuid === flight_uuid;
      })
      res.json(list);
    }
    else if(phone){
      list = list.filter((item) => {
        return item.phone === phone;
      })
      res.json(list);
    }
    return res.json(list);
  },
  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.1
  // router.post('/', create);
  create: (req, res) => {
    // POST /book에서 사용할 booking_uuid입니다.
    const booking_uuid = uuid();
    // TODO:
    if(booking_uuid){
      booking.push(req.body)
    }
    return res.json({}) 
  }
};
```

