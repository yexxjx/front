/*
    [인터벌 : interval] :간격/주기 뜻
        1. 시간적인 간격에 따라 특정 코드/함수 실행
        2. 사용법
            (1) 시작
                setInterval( 함수명, 밀리초 );
                - 함수명 : 함수명만 작성한, () 생략한다
                - 밀리초 : 1/1000초
                예시) let 변수명 = setInterval(함수명, 밀리초)
            (2) 종료
                clearInterval(종료할Interval객체);

*/

// [1]
let value=0;
function 증가함수(){
    value=value+1; // 전역변수 1 증가
    const box1=document.querySelector('#box1');
    box1.innerHTML=value;
}

// 특정한 시간/간격 마다 함수 실행
setInterval(증가함수, 1000); // 1초(1/1000)마다 '증가함수' 자동 실행
// 주의할 점: 증가함수 : 함수그자체 vs 증가함수() : 함수실행


// [2]
function 시계함수(){
    let today=new Date(); // new Date(): 현재 시스템의 날짜/시간 변환 함수
    let hour=today.getHours(); // new Date().getHours()
    let minute=today.getMinutes();
    let second=today.getSeconds();
    let time=`${hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`;
    const box2=document.querySelector('#box2');
    box2.innerHTML=time;
}

setInterval(시계함수, 1000); // 자동으로 

// [3]
let time=0; // 현재 타이머의 시간(초)
let timerid; // interval 객체를 저장하는 변수? 서로 다른 함수간의 공유
function 타이머시작(){
    // interval 실행 후 반환된 객체를 timerid에 대입, 왜? 추후에 종료하기 위해
    timerid=setInterval(시간함수, 1000);
}

function 타이머중지(){
    clearInterval(timerid); // clearinterval(종료 할 interval 선택)
}

function 시간함수(){
    time++; // 1 증가
    document.querySelector('#box3').innerHTML=time;
    // 유재석객체. 편의점에서사먹을것고르기(),마크업
    // const box3=document.querySelector('#box3')
    // box3.innerHTML=time

}