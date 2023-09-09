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

let position = 0;

const move = () => {
    if(position < 450){
        position++;
        childBlock.style.left = `${position}px`;
        setTimeout(move, 10);
    }
}
move();