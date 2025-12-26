// 1. 숫자
100 // 숫자형
console.log(100) // 1) 소괄호부터 읽기
console.log(typeof 150) // 2) typeof 자료
// 100 : 숫자형 vs "100" : 문자형
console.log(3.37) // 3) 컴퓨터는 소수점 모름. <부동소수점>

// 2. 문자
console.log("안녕") // 1) " " 으로 감싼 자료
console.log('안녕') // 2) ' ' 으로 감싼 자료
console.log(`안녕`) // 3) ` ` 으로 감싼 자료(백틱 기호)

// 2-1. 이스케이프(제어) 문자
console.log("\\안녕4") //4) \\ 일 때 \만 출력 
console.log("\n안녕5") // 5) \n 일 때 줄 바꿈 처리
console.log("\t안녕6") // 6) \t 일 때 들여쓰기 처리
console.log("\"안녕\"") // 7) \" 또는 \' 는 따옴표 출력

// 2-2. 템플릿 리터럴 : 문자열과 변수/수식/함수 조합할 때
let 키=180
console.log("나의 키:"+키) // 8) 방법1 "문자열" + "변수명"
console.log(`나의 키:${키}`) // 9) 방법2 `문자열` ${변수명/수식/함수호출}

// 2-3. 문자 : 한 글자, 문자열 : 두 글자 이상, "문자열은 배열(여러 묶음)이다"
console.log(`안녕하세요`. length) // 10) 문자열 길이 변환
console.log(`안녕하세요`[0]) // 11) 안[0] 녕[1] 하[2] 세[3] 요[4] > 순서 번호는 0부터 [index]

//3. 논리 : 제어문 (조건문/반복문) 자주 사용, 경우의 수 2개일 때
console.log(true)
console.log(false)

// 4. 특수
let var1; // 변수를 선언할 때 초기에 값을 대입하지 않음
console.log(var1); // 1) undefined. 변수는 존재하지만 정의는 되지 않음

let var2=null; // 변수의 데이터가 유효하지 않음
console.log(var2); // 2) null

// 5. 배열 : 여러 자료를 *순서* 대로 저장하는 자료
let ary1=['봄','여름','가을','겨울'];
    // 1) let ary1 : 변수명 (선언/만들기)
    // 2) = 대입, 오른쪽 자료를 왼쪽에 넣기
    // 3) '봄', '여름' : 자료, [ ] : 배열

// 6. 인덱스 : 배열 내 저장된 순서 번호 *0부터 시작*, 중간에 삭제돼도 한 칸 씩 당겨짐
console.log(ary1[0]); // 변수명[인덱스] 봄[0] 여름[1] 가을[2] 겨울[3]
console.log(ary1[4]); // undefined
// 배열 내 자료가 4개이면, 길이4 / 인덱스 0-3 

// 7. 배열 내 자료(요소) 수정 : 변수명[수정 할 인덱스] = 새로운 값
ary1[0]='SPRING'; console.log(ary1);

// 8. 배열 내 자료(요소) 추가 : 변수명.push(새로운 값) 마지막 인덱스 뒤로 추가
ary1.push('SPRING2'); console.log(ary1);
// ; 한 줄의 명령어 마침 의미 
// 한 줄에 문장이 하나이면 생략 가능 vs 한 줄에 두 문장이면 ; 필수

// 9. 배열 내 자료(요소) 중간 삭제 : 변수명.splice(삭제 할 인덱스, 개수)
ary1.splice(2,1); console.log(ary1);

// 10. 배열 내 자료(요소) 중간 삽입 : 변수명.splice(삽입 할 인덱스, 0, 새로운 자료)
ary1.splice(2,0,"가을"); console.log(ary1);

// 11. 배열 내 자료(요소) 값 찾기 : 변수명.indexOf (찾을 값). 찾을 값이 존재하면 인덱스 반환, 없으면 -1
let result=ary1.indexOf("가을"); console.log(result);

// 12. 배열 내 자료(요소) 개수 반한 : 변수명.length . 배열 내 자료 총 개수 반환
console.log(ary1.length);



// 형 변환. 다른 프로그래밍/환경 통신 간의 데이터 변화 다수 발생
let input=prompt("숫자 : "); //prompt 무조건 문자열로 변환한다.
console.log( typeof input );

input = input *1; // 방법1
console.log( typeof input );

input = Number( input ); // 방법2
console.log( typeof input );

console.log( Number("100") ); // "100" > 100
console.log( parseInt("100") ); // "100" > 100
console.log( parseFloat("3.14") ); // "3.14" > 3.14
console.log( String( 100 )); // 100 > "100"
console.log( 100 + "" ); // 100 > "100"
console.log( Boolean("true") ); // "true" > true