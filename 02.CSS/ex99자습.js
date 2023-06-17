// document.addEventListener('DOMContentLoaded', function () {
//     speed = 2000;
//     let element; // 선택된 속성
//     let currentElement; // 이전에 선택된 속성
//     let score = 0; // 점수
//     let socreElement = document.getElementById('score'); //점수를 가리키는 속성
//     let initScore = document.getElementById('initScore'); //점수를 초기화 시키는 속성

//     function onGame() {
//         // 기존에 있었던 서클 지우기
//         if(currentElement){ 
//             element = null;
//             currentElement.style.backgroundColor = 'whitesmoke';
//             currentElement.removeEventListener('click', clickEvent);
//         }
//         // 랜덤 서클 선택
//         let randomNumber = Math.floor(Math.random() * 9)+1; 
//         let randomCircle = `circle${randomNumber}`
//         element = document.getElementById(randomCircle);

//         // 원 색깔 변경
//         element.style.backgroundColor = 'red';

//         // 활성화 된 서클 클릭시 이벤트
//         element.addEventListener('click', clickEvent);
//         initScore.addEventListener('click',function(){
//             score = 0;
//             socreElement.innerHTML = score;
//         });

//         // 지울 서클 할당
//         currentElement = element;
//     }
//     // 활성화 된 서클 클릭 이벤트
//     function clickEvent(){
//         element.style.backgroundColor = 'whitesmoke';
        
//         scoreUp();
//     }
//     // 스코어가 올라가는 함수
//     function scoreUp(){
//         score++;
//         socreElement.innerHTML = score;
//         let scoreUpText = element.querySelector('#scoreUpText');
//         scoreUpText.innerHTML = "+1"
//         setTimeout(function() {
//             scoreUpText.innerHTML = ""
//         }, 300);
//     }

//     setInterval(onGame, speed);
// });

document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('.circle');
    let emptyElements = [];
    let nowElement = null;
    let currentElement = null;
    let randomCircle = null;
    let scoreElement = document.getElementById('score'); //점수를 가리키는 속성
    let speed = 2000;
    let score = 0;
    let scoreText = null;

    function onGame(){
        // 이전 셀 초기화
        if(currentElement){
            currentElement.style.backgroundColor = 'whitesmoke';
            currentElement.removeEventListener('click', success);
            for(let element of emptyElements){
                element.removeEventListener('click',failed);
            }
            emptyElements = [];
        }

        // 랜덤 셀 선정, 컬러 변경
        randomCircle = Math.floor(Math.random()*elements.length);
        nowElement = elements[randomCircle];
        scoreText = nowElement.querySelector('#scoreText');
        nowElement.style.backgroundColor = 'red';
        for (let i = 0; i < elements.length; i++) {
            if(i!==randomCircle){
                emptyElements.push(elements[i])
            }            
        }
        nowElement.addEventListener('click',success);
        for(let element of emptyElements){
            element.addEventListener('click',failed);
        }
        
        // 초기화를 위한 이전 셀 선정
        currentElement = nowElement;
    }
    // 클릭 성공시 실행되는 함수
    function success(){
        score++;
        scoreElement.innerHTML = score;

        scoreText.innerHTML = '+1';
        setTimeout(function() {
            scoreText.innerHTML = ""
        }, 300);

        nowElement.removeEventListener('click', success);
        nowElement.style.backgroundColor = 'whitesmoke'
    }
    // 클릭 실패시 실행되는 함수
    function failed(){
        score--;
        scoreElement.innerHTML = score;

        for(let element of emptyElements){
            element.removeEventListener('click',failed);
        }

    }
    setInterval(onGame, speed);
});