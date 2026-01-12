
// 객체란? 서로 다른 자료/값들을 하나의 자료로 구성
// 배열이란? 서로 동일한 타입의 재료/값들을 하나의 자료로 구성
// 객체종류? (1) 내가만든객체{} (2) 남이만든객체:console.log, document
// 남이만든객체 장점 : <라이브러리> 미리 만들어진 함수/기능 많다

// [1] document : js회사에서 html 조작할 때 사용하세요.
console.log(document); // 현재 js가 포함하는 HTML 그 자체 <객체표현>

// [2] .write("") : 매개변수 : html 출력할 문자열
// 매개변수 : html 출력할 뭄ㄴ자열, 반환값 : x
document.write("<h3> [2] 내장객체 함수 실행 </h3>");

// [3] document.querySelector("css 선택자") : js에서 특정한 마크업 객체 반환함수
// 매개변수 : css선택자, 반환 값:선택된 마크업 객체 또는 (없으면) undefined
let div=document.querySelector("div"); // 문서/(html)에서 div 마크업 객체 가져오기
console.log(div);

let box2=document.querySelector(".box2"); // 함수 결과가 box2 변수에 저장됨
// let box2=3+3 // 변수는 자료/값/수식결과/함수결과 저장, 함수는 수식/코드 저장
console.log(box2);

let box3=document.querySelector("#box3");
console.log(box3);

// [4] document.querySelectorAll("css선택자") : js에서 특정한 마크업(들 객체)
let div2=document.querySelectorAll("div");
console.log(div2); // html에 존재하는 모든 div

// [5] innerhtml : 선택된 DOM객체 내 마크업 사이에 텍스트를 호출
let html1=document.querySelector("#box3").innerHTML
console.log(html1); // box3
document.querySelector("#box3").innerHTML="박스3"; // 마크업 사이에 텍스트 <수정>

// [6] .vaule : 선택된 DOM 객체 내 마크업 value 속성 값 호출
// 버튼 클릭 시 입력받은 값 가져오는 함수
function func1(){ // 매개변수x
    let value=document.querySelector(".myinput").value;
    console.log(value+"입력했군요.");
    document.querySelector(".myinput").value=""; // 공백으로 초기화
} // 반환 값x 
// js에서 실행하는 방법 : let 결과=함수명(인지값);
// html에서 실행하는 방법 : <마크업명 이벤트속성명="함수명(인지값)"/>


function func2(){ // 주의할 점 : 입력상자(input/select/textarray등)만 가능함
    document.querySelector(".title").innerHTML="js에서 넣어준 텍스트";
}

// [7] .style="css속성명.css속성값;"
function func3(){
    // 한 명령어(한 줄)에 (도트/접근연산자) 가 많아지면 중간에 변수활용
    let title2=document.querySelector(".title2");
    title2.style="color:white;";
    title2.style.backgroundColor="blue"; // css는 -(하이픈) 불가능하므로 카멜표기법
}

// 카멜표기법이란> 낙타의 등 모양처럼, mycar > myCar, background-color > backgroundColor