/*
// 1] 산술연산자 : +더하기 -빼기 *곱하기 /나누기 %나머지
console.log(10+3);
console.log(10-3);
console.log(10*3);
console.log(10/3);
console.log(10%3);


// 소프트웨어 프로세스 입력 > 저장 > 처리 > 출력
// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.

let kor=prompt("국어 점수");
let eng=prompt("영어 점수");
let math=prompt("수학 점수");
let sum = Number(kor) + Number(eng) + Number(math) ;
let avg = sum/3;
console.log(`result sum : ${sum}, avg : ${avg}` );

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.

let radius=Number(prompt("반지름"));
console.log(`result2 : ${radius*radius*3.14}`);

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.

let f1 =Number(prompt("실수1"));
let f2 =Number(prompt("실수2"));
let ratio = (f1/f2) *100; // 100%=1 10%=0.1 1%=0.01
console.log(`result3 : ${ratio}%`);

/*
2] 비교연산자 : >초과 <미만 >=이상 <=이하 ==같다 !=같지않다 ===(값과 타입)같다 !==(값과 타입)같지 않다
비교 결과는 true 또는 false

3] 논리연산자 : &&이면서 ||이거나 !부정
 &&이면서 이고 면서 그리고 모두 > 모두 참이면 참
 ||이거나 거나 또는 하나라도 > 하나라도 참이면 참
 ! 부정 반대 not조건 true를false로 false를true로
 주의할 점 : 50<점수<100 표현식 없음 > 점수>50 && 점수<100
 논리 결과는 true 또는 false
*/

// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.

let int1=prompt("정수");
let result=int1%2==1;
console.log(`result4 : ${result}` );

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.

let int2=prompt("정수");
console.log(`result5 : ${ int2 % 7 ==0}`);

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.

let id=prompt("아이디");
let pw=prompt("비밀번호");
let result2=id=='admin' && pw=='1234';
console.log(`result6 : ${result2}`);

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.

let int3=prompt("정수");
let result3=int3%2==1 && int3%7==0;
console.log(`result7 : ${result3}`);


/* 
4] 할당 / (복합) 대입 연산자
    = 오른쪽 자료를 왼쪽에 대입, let 변수명 = 3
    += 오른쪽 자료를 왼쪽 자료에 더한 후 왼쪽에 대입
        → let a = 2; a += 3, a는 5로 저장
        → let a = 2; a = a + 3, a는 5로 저장
        -=, *=, /=, %=

5] 증감연산자 : 1 증가 또는 1 감소 연산자 ++. --
    1) 선위 증가 : ++변수명; 선위 감소 : --변수명;
    2) 후위 증가 : 변수명++; 후위 감소 : 변수명--;
    → 선위 후위는 ;/ 문장 안에서 우선 순위 정함
    →    a++    vs    a = a + 1   vs  a += 1

6] 삼항연산자 : 조건 ? 참 : 거짓
    1) 조건 : 조건에는 논리(true/false) 또는 논리를 반환하는 연산식
    2) 참 : true 대신에 반환할 자료 / 예)true 대신에 합격
    3) 거짓 : false 대신에 반환할 자료 / 예)false 대신에 불합격
    → if 조건문 비슷하지만 다르다. 리엑트 환경에서 주료 사용됨 (간단한 조건식에서 사용)
    → 중첩 : 조건1 ? 참1 : 조건2 ? 참 : 조건3 : 참3 : 거짓
let age = 40;
++age; // 결과 차이 없음
age++; // 결과 차이 없음
console.log(++age); // 세미클론 안에 여러 명령어가 존재하므로
console.log(age++);
*/

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let one =prompt("1차점수");
let two =prompt("2차점수");
let sum = Number(one) + Number(two);
let result8 = sum >= 150 ? '합격' : '불합격';

// document.write(`<h3> 실습8 : ${ result8 } <h3/>`);
document.querySelector('h3').innterHTML = '실습8 : ${ result8 }';

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let name1 =prompt('첫번째 고객');
let name2 =prompt('두번째 고객');

name1 += name1 == '유재석' ? '(방장)' : ' ';
name2 += name2 == '유재석' ? '(방장)' : ' ';
let result9 = `<li> ${ name1 } </li>
               <li> ${ name2 } </li>`;
document.querySelector ('ol').innerHTML = result9;

// 연산은 인수에 따라 결과를 항상 다르게 반환한다.
