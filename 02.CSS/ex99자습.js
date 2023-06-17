document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('.circle');
    let emptyElements = [];
    let nowElement = null;
    let currentElement = null;
    let randomCircle = null;
    let scoreElement = document.getElementById('score'); //점수를 가리키는 속성
    let initScore = document.getElementById('initScore');
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
        initScore.addEventListener('click', function () {
            score = 0;
            scoreElement.innerHTML = score;
        });
        
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