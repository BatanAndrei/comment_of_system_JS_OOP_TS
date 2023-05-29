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
        console.log(this.comment);
    };
    return mainComments;
}());
var comm = new mainComments();
comm.sending();
