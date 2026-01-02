// [1] "안녕하세요" 5번 출력
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요"); // 복붙하면 됨

// [2] 반복되는 코드, 반복되지 않는 코드
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5); // 복붙하면 됨

// 문제점 : 반복수가 늘어나면 코드도 같이 늘어남 비효율적임
// 반복되는 코드 : console.log(?);
// 반복되지 않은 코드 : 1 2 3 4 5
// 반복되지 않은 코드 패턴 : 1씩 증가

// 1. 초기값 : let i=1; * i(Iterator) 반복자
// 2. 조건문 : i <= 5;  * 반복자가 반복실행하는 조건식
// 3. 증감식 : i++;     * i++ i=i+i i+=1 모두 동일
// 4. 실행문 : {코드;}  * 반복자가 조건을 true 일 때 실행되는 코드
for(let 반복변수=1; 반복변수 <=5; 반복변수=반복변수+1){console.log(반복변수);}

// [3] 1부터 5까지 총합계 구하시오

let 총합계=0; // 총합계를 저장하는 변수
총합계+=1;
총합계+=2;
총합계+=3;
총합계+=4;
총합계+=5;

// 반복되는 코드 : let 총합계 =0;
// 반복되지 않은 코드 : 1 2 3 4 5
// 반복되지 않은 코드 패턴 : 
// 초기값 : let 더할값 -1; // 조건문 : 더할값 <=5; // 증감식 : 더할값++; // 실행문 : 총합계 +=
let sum =0;
for(let  i=1; i <=5 ;i++){sum+=i;}
console.log(sum);

// [4] 구구단 2단 전체 출력
// console.log(`2x1 = ${2*1}`);~console.log(`2x9 = ${2*9}`);
// 반복되는 코드 : console.log(`2x? = ${2*?}`);
// 반복되지 않은 코드 : 1 2 3 4 5 6 7 8 9
// 반복되지 않은 코드 패턴 : 1~9까지 1 증가
// 초기값 : let 곱=1; // 조건문 : 곱 <=9; // 증감식 : 곱++; // 실행문 : console.log(`2x? = ${2*?}`);
for(let 곱=1; 곱 <=9; 곱++){console.log(`2x${곱} = ${2*곱}`);}

// [5] 배열과 반복문 관계 : 배열 내 저장된 자료들은 인덱스가 존재한다. index=배열 내 저장된 자료들의 순서번호
// 반복문 초기값 과 배열의 인덱스=0;
// 반복문 조건문과 배열명.length
let ary =[]; // 빈 배열 생성
// let a =prompt("값"); ary.push(a); // 변수명.push(새로운 값);
// let a =prompt("값"); ary.push(b);
// let a =prompt("값"); ary.push(c);
// count가 1부터 count는 3이하까지 1씩 증가하면서 값을 입력 받아 변수에 저장한 후 배열 내 입력받은 값(d) 추가
for(let count=1; count <=3; count++){let d =prompt("값"); ary.push(d);}
// 출력

for(let index=0; index <= ary.length-1; index++){console.log(ary[index]);}