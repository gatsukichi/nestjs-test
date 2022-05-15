# nestjs-test

git kraken을 테스트해봅니다.

js(language)로 테스트합니다. (조금 해봣는데 너무 불편하네 ;; nest를 쓰려면 ts쓰는게 훨씬 나을지도 ??..)

express가 아닌 fastify로 어뎁트 해서 사용합니다.

DB는 mongodb + mongoose를 사용합니다.

## Description

nest.js 의 리서치 및 learning

파라미터 데코레이터가 없어서 바벨설정을 추가해서 해결한 케이스가 있었다.

때문에 나는 이게 처음에 js template으로 시작했을때
해당 디펜던신가 없는것에대해서 Issue를 남겼지만

https://github.com/nestjs/javascript-starter/issues/41

관리자측에서 해준얘기는

@Bind(Req())-> 해당 데코레이터를 사용하고

Js로 nestjs를 사용할때는 파라미터 데코레이터를 사용하면 안된다고 전달받았다. (이유는 모르겠다.. 쓰지말라고하니 안써야할지도..(바벨옵션 추가해주면 되긴하는데 억지로 구현한거나 다름없을지도 모른다.))

## Installation

```bash
$ npm ci
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

TDD는 추후.. 차근차근 ㅠㅠ

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
