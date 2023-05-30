var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnswerComments = /** @class */ (function (_super) {
    __extends(AnswerComments, _super);
    function AnswerComments() {
        return _super.call(this) || this;
    }
    AnswerComments.prototype.createAnswer = function () {
        document.querySelectorAll('.btn-answer').forEach(function (item) {
            item.addEventListener('click', function (event) {
                comm.arrowAnswer = event.currentTarget.closest('.btn-answer');
                comm.indexArrow = comm.arrowAnswer.getAttribute('data-index-arrow');
                comm.drawAnswer = document.querySelector(".answer-field-".concat(comm.indexArrow));
                comm.drawAnswer.innerHTML =
                    "<form class=\"area-answer\">\n                        <input class=\"field-answer\" type=\"text\" size=\"40\" id=\"idAnswer\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442...\">\n                        <button class=\"submit-answer\" type=\"submit\" id=\"btnAnswer\">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</button>\n                    </form>";
                answ.submitAnswer(comm.indexArrow);
                /*toggleHeartAnswer(indexArrow);
                changeRatingAnswer(indexArrow); */
                comm.saveComments();
            });
        });
    };
    ;
    AnswerComments.prototype.submitAnswer = function () {
        document.querySelectorAll('.submit-answer').forEach(function (item) {
            item.addEventListener('click', function (subm) {
                subm.preventDefault();
                var answertBody = document.getElementById('idAnswer');
                var comAnswer = {
                    bodyAnswer: answertBody.value,
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
    ;
    return AnswerComments;
}(MainComments));
var answ = new AnswerComments();
answ.createAnswer();
