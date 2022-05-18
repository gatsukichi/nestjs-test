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

## Log

로그의 종류
Log - 중요한 정보의 범용 로깅
Warning - 치명적이거나 파괴적이지 않은 처리되지 않은 문제
Error - 치명적이거나 파괴적인 처리되지 않은 문제
Debug - 오류 발생시 로직을 디버그하는 데 도움이되는 유용한 정보입니다. 개발자 용
Verbose - 응용 프로그램의 동작에 대한 통찰력을 제공하는 정보입니다. 운영자 용

## Config

window에서는 환경변수를 지원하지않기때문에
npm install -g win-node-env 라는 모듈 먼저 설치

이후 맥/윈도우 동일

npm install config --save

config 라는 모듈 사용해보려고했는데 이상하게 get이 안된다. 그냥 불러오면 일단 값은 찍히는데.. 원하는값만 불러오고싶은데 안된다.

이렇게저렇게 쓰자면 쓸수는 있을거같다.

## memo

배포전 소스코드 에러있는지 확인
npm run prestart:prod

```json
"build" : "tsc -p tsconfig.build.json",
"format" : "prettier --write \"src/**/*.ts\"",
"start" : "ts-node -r tsconfig-paths/register src/main.ts",
"start:dev" :  "NODE_ENV=development nodemon",
"start:debug" : "nodemon --config nodemon-debug.json",
"prestart:prod" : "rimraf dist && npm run build",
// 림바? rm -rf 에서 이름따온것으로 dist파일 지우는 목적으로 사용하는듯하다.
"start:prod": "NODE_ENV=production node dist/main.js",
"lint" 블라블라
"테스트" : 제스트
"테스트:왓치" : 제스트 --watch
"테스트:커브" : 제스트 --coverage

```

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
