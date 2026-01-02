// [1] for 중첩 : for 안에 for, 구구단 출력
// (1) 1곱 ~ 9곱
for(let 곱=1; 곱<=9; 곱++){ // 곱이 1부터 9까지 1씩 증가
    console.log(`2x${곱}=${2*곱}`);}
// (2) 2단 ~ 9단
for(let 단=2; 단<=9; 단++){ // 단이 2부터 9까지 1씩 증가
    console.log(`${단}x1=${단*1}`)
}
// (3) 1)곱마다 단을 계산하는 건지 2)단마다 곱을 계산하는 건지
// 2단일 때 9번 곱,  3단일 때 9번 곱
for(let 단=2; 단<=9; 단++){ 
for(let 곱=1; 곱<=9; 곱++){
    console.log(`${단}x${곱}=${단*곱}`);}
}

// [2] 별 출력하기
/*            line(row) star(column)    
*             1         1               
**            2         1 2
***           3         1 2 3
****          4         1 2 3 4
*****         5         1 2 3 4 5

찾은 패턴
line 1부터 5까지 1씩 증가하면서 줄바꿈(\n) 출력
star 1부터 현재 라인까지 1씩 증가하면서 "*" 출력
*/
// (1)
let output=""; // 출력할 문자열 선언
// for(let line=1; line<=5; line++){output=output+"\n";} //console.log() 함수는 1개당 줄바꿈 1개 내장
// 예상 : output="\n\n\n\n\n";

// (2)
// for(let star=1; star<=3; star++){output=output+"*";}
// 예상 : output="\n\n\n\n\n*****";

// (3) 줄마다 별 출력? 별마다 줄 출력?
for(let line=1; line<=5; line++){
    for(let star=1; star<=line; star++){output=output+"*";} // 총 합계와 유일하게 문자열 추가/연결
    output=output+"\n"; // 줄 바꿈 처리
} // for end
console.log(output);

// 예상 output 
// line 1일 때 *\n
// line 2일 때 *\n**\n
// line 3일 때 *\n**\n***\n
// line 4일 때 *\n**\n***\n****\n
// line 5일 때 *\n**\n***\n****\n*****\n

// [3] 반복문과 자주 사용되는 키워드
// (1) continue;
for(let i=1; i<=5; i++){
    if(i==3){continue;} // 만약에 i가 3일 때 반복문으로 이동 <이하 코드 실행 안됨>
    console.log(i); // 1 2 4 5; 1부터 5까지(3제외) 출력됨 이유 : 3일 때 continue 만나서
    }
// (2) break;
for(let i=1; i<=5; i++){
    if(i==3){break;} // 만약에 i가 3일 때 반복문을 탈출/종료
    console.log(i); // 1 2; 1부터 5까지 출력하되 3이면 종료 이유 : 3일 때 break 만나서
}

// (3) 무한 루프 : 종료가 없는 계속되는 반복문
// for( ; ; ){console.log(1);}
// while(true){console.log(1);}
// 활용 : for( ; ;){let a=prompt("무한입력");}
// 활용 : for( ; ;){let b=prompt("무한입력"); if(b=="x")break;}