# YSSB


### Abstract <hr/>
##### Team YSSB(약수역 스타벅스)
> 2015147508 한채연, 2015147537 황규린, 2015147558 권여경

###### CS3105-01 Fall Database Final Team Project in Computer Science, Yonsei University

<br><br/>
### Directory Structure <hr/>
* modules/ 에는 DB에 쿼리 결과를 비동기 처리하기 위한 db.js 파일과 비동기 함수를 사용하기 위한 wrapper.js 파일이 존재한다.
* public/에는 사용자가 업로드 한 파일을 저장하기 위한 upload/와 client side의 ejs 파일들이 있는 views/가 있다. upload/는 프리랜서의 외적 포트폴리오를 저장하는 portfolio/와 의뢰 문서를 저장하는 req_spec/으로 나뉜다. 
* router/는 사용자들의 동작에 따라 서버의 정보에 접근 및 변경을 가능하게 하기 위한 API들이 작성된 파일들이 존재한다.
* node_modules/는 우리가 사용한 npm package들에 대한 정보가 저장된다.
* config.js는 포트번호, DB, MySQL, session 등의 config 정보가 담겨있다.
* index.js는 이 프로그램을 실행하는 파일로 모듈들의 사용을 선언해준다.
* router.js는 router/ 안의 파일들로 routing해준다.
* package.json은 사용한 npm package의 정보가 요약된 파일이다.
* package-lock.json은 package.json의 각 package들 간의 dependency tree에 대한 정보를 담고있다.

<br><br/>
### Developement Environment <hr/>
* Language
    > HTML5, CSS Javascript, Node JS, EJS, MySQL