////////////////////////////////////////////
// modal

const modalOpen = document.querySelector(".confim")
const modalClose = document.querySelector(".modal-close-button")
const modal = document.querySelector(".modal")

function modalInit() {
    modalOpen.addEventListener("click", modalOpenEvent);
    modalClose.addEventListener("click", modalCloseEvent);    
}

function modalOpenEvent(){
    answerCheck();
    modal.classList.remove("hidden");
}

function modalCloseEvent(){
    modal.classList.add("hidden");
}

modalInit();

////////////////////////////////////////////
//

const correctAnswer = "바보"
const usersAnswer = document.getElementById("answer")
const modalContext = document.querySelector(".modal-context")

function answerCheck()
{
    if (usersAnswer.value === correctAnswer)
    {
        modalContext.innerText = "정답!";
    }
    else
    {
        modalContext.innerText = "오답!";
    }
}