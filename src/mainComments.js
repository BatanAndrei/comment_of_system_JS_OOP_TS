var mainComments = /** @class */ (function () {
    function mainComments() {
        this.comments = [];
        this.comAnswers = [];
        this.arrowAnswer = '';
        this.indexArrow = '';
        this.drawAnswer = '';
        this.answer = [];
        this.time = Math.floor(Date.now() / 1000);
        this.userSend = './images/Max.png';
        this.photoSend = 'Максим Авдеенко';
        this.like = false;
        this.favoriteOff = 'В избранное';
        this.ratingScore = 0;
        this.value = '';
        this.commentBody = document.getElementById('comment-body');
        this.commentSend = document.getElementById('comment-send');
        this.comment = comm;
    }
    mainComments.prototype.sending = function () {
        var _a;
        (_a = this.commentSend) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            comm.commentContent();
        });
    };
    mainComments.prototype.commentContent = function () {
        var _a;
        this.comment = {
            answer: [],
            body: (_a = this.commentBody) === null || _a === void 0 ? void 0 : _a.value,
            time: Math.floor(Date.now() / 1000),
            userSend: 'Максим Авдеенко',
            photoSend: './images/Max.png',
            like: false,
            favoriteOff: 'В избранное',
            ratingScore: 0
        };
        inputF.count.innerText = "\u041C\u0430\u043A\u0441. ".concat(inputF.limit, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"); // обнуляем при клике счётчик символов
        inputF.btn.style.backgroundColor = '#dbd7d7'; // обнуляем стиль счётчика
        this.commentBody.value = '';
        if (this.comment.body.length != '' && this.comment.body.length <= inputF.limit) {
            this.comments.push(this.comment);
            comm.saveComments();
        }
    };
    mainComments.prototype.saveComments = function () {
        localStorage.setItem('comments', JSON.stringify(this.comments)); // сохраняем в Local  
    };
    ;
    return mainComments;
}());
var comm = new mainComments();
comm.sending();
