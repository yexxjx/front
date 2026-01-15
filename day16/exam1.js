

// [1] 다른 js파일에서 변수/함수 사용 가능 여부
// html에서 여러 개 js 파일 호출했을 때
// <script src="text1.js"></script>
// <script src="exam1.js"></script>
console.log(var1); // 다른 test1.js에서 선언된 변수 사용
func1(); // 다른 text1.js에서 선언된 함수 사용

// [2] js는 html에 종속된 관계라서 f5(새로고침) 초기화(변수재생성)
// 백엔드 필요함. 백엔드 없이 영구저장 할 수 없나요? 가능
// 자동로그인, 검색기록, 비회원장바구니, 최근본제품 등 (쿠키)

/* 웹스토리지: 브라우저(크롬/엣지/사파리) 저장소 제공
    1. 브라우저 > f12 > application 클릭 > 사이드바 메뉴
        [로컬 저장소] / [세션 저장소]
    2. 종류
    [1] sessionStorage : 세션 저장소를 관리하는 객체
        * 서로 다른 html간의 자료 공유안함
        * 모든 브라우저가 종료되면 자료 자동 삭제
        
    [2] localStorage : 로컬 저장소를 관리하는 객체(기능/데이터)
        * 서로 다른 html간의 자료 공유함 <도메인(http주소) 동일>
        * 모든 브라우저가 종료 되더라도 자료 유지

    3. 주요 기능/함수
    [1] .setIteam("key", value);  : 세션/로컬 저장소에 속성/자료 후기
    [2] .getIteam("key");         : 세션/로컬 저장소에 "key" 해당하는 자료 호출
    [3] .remoeIteam("key");       : 세션/로컬 저장소에 "key" 삭제(value 같이 삭제됨)
        .clear();                 : 모든 key 삭제

    4. JSON 변환: 세션/로컬 저장소는 문자열 저장 가능
    [1] JSONN.stringfy() : JS객체 > JSON문자열
    [2] JSON.parse() : JS문자열 > JS객체
*/

console.log(sessionStorage);
console.log(localStorage);

// (1) 저장
sessionStorage.setItem("name", "유재석");  // f12>application
localStorage.setItem("age", 40);           // f12>application

// (2) 호출
console.log(sessionStorage.getItem("name")); // 섹션저장소에 저장된 "name" 키 갖는 값 호출
console.log(localStorage.getItem("age"));

// (3) 삭제
sessionStorage.removeItem("name"); // 세션저장소에 "name" 키 삭제
localStorage.removeItem("age");    // 로컬저장소에 "age" 키 삭제

// (4) 활용 : 복잡한 (샘플) 데이터
    // 세션/로컬 저장소는 문자열만 저장이 가능함. 배열/객체 > 문자열로 변환 JSON: 자바스크립트 객체 기반의 문자열 형식
JSON.stringify();
sessionStorage.setItem("회원목록", JSON.stringify([{name: "유재석", age: 40},{name: "강호동", age: 50}]));
console.log(JSON.parse(sessionStorage.getItem("회원목록")));