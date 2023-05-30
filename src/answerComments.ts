class AnswerComments extends MainComments {
    innerHTML?: HTMLElement;
    constructor() {
        super()

    }

    public createAnswer() {
        document.querySelectorAll('.btn-answer').forEach(function(item: any): void{
            item.addEventListener('click', function(event: any): void{
                comm.arrowAnswer = event.currentTarget.closest('.btn-answer');
                comm.indexArrow = comm.arrowAnswer.getAttribute('data-index-arrow');
                comm.drawAnswer = document.querySelector(`.answer-field-${comm.indexArrow}`); 
                comm.drawAnswer.innerHTML =
                    `<form class="area-answer">
                        <input class="field-answer" type="text" size="40" id="idAnswer" placeholder="Введите ответ...">
                        <button class="submit-answer" type="submit" id="btnAnswer">Ответить</button>
                    </form>`;
    
                    answ.submitAnswer(comm.indexArrow);
                    /*toggleHeartAnswer(indexArrow);
                    changeRatingAnswer(indexArrow); */
                    comm.saveComments();
            });
        });
    };

    public submitAnswer() {                                                  // снимаем submit с кнопки "Ответить" - preventDefault();
        document.querySelectorAll('.submit-answer').forEach(function(item){  
            item.addEventListener('click', function(subm){
                subm.preventDefault();
                let answertBody = document.getElementById('idAnswer');
    
                let comAnswer = {
                    bodyAnswer: comm.answertBody.value,
                    timeAnswer: Math.floor(Date.now() / 1000),
                    userSendAnswer: 'Максим Авдеенко',
                    userAnswer: 'Джунбокс3000',
                    photoAnswer: './images/Jun.png',
                    likeAnswer: false,
                    favoriteOffAnswer: 'В избранное',
                    ratingScoreAnswer: 0,
                };
                //тут мы кладем ответ в нужный коммент по ключу indexArrow
                //который мы передали в createAnswer сюда
                comm.comments[comm.indexArrow].answer.push(comAnswer);
                
                //передаем обязательно индекс родителя
                /* answerContentDraw(indexArrow);
                toggleHeartAnswer(indexArrow);
                changeRatingAnswer(indexArrow); */
                comm.saveComments();
            });
        });
    };
}



let answ = new AnswerComments();
answ.createAnswer();
answ.submitAnswer();