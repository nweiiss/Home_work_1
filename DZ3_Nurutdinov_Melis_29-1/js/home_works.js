// HOME WORK 1 (PART 1)

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[A-Za-z_.]+@gmail.com$/;

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ОК';
        gmailResult.style.color = 'green';
    }else{
        gmailResult.innerHTML = 'NOT OK';
        gmailResult.style.color = 'red';
    }
}

//HOME WORK 1 (PART 2)

const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
let z = 0;
let a = 0;

// const move = () => {
//     if(direction === "right"){
//         if(positionX >= 450){
//             direction = "down";
//         }else{
//             positionX++;
//             childBlock.style.left = `${positionX}px`
//         }
//         return setTimeout(move, 1);
//     }

// }
// move(); 


const move = () => {
    if(positionX < 450 && z == 0){
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(move, 1);
    }else if(positionX >= 450 && positionY < 450 && z == 0){
        positionY++;
        childBlock.style.top = `${positionY}px`;
        setTimeout(move, 1);
    }else if(positionX == 450 && positionY >= 450 && z < 450){
        z--;
        positionX--;
        childBlock.style.left = `${z}px`;
        setTimeout(move, 1);
    }
}
move();


// HOME WORK 2

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let intervalId;
let number = 0;
let counting = false; 

startBtn.addEventListener('click', () => {
    if (!counting) {
        counting = true;
        intervalId = setInterval(() => {
            number++;
            document.getElementById('secondsS').textContent = number;
        }, 1000);
    }
})

stopBtn.addEventListener('click', () => {
    if(counting){
        counting = false;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener('click', () => {
    if(counting){
        counting = false;
        clearInterval(intervalId);
    }
    number = 0;
    document.getElementById('secondsS').textContent = number;
})

    
