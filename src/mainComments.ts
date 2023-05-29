class mainComments {
    comments: string[] = [];
    comAnswers: string[] = [];
    
    arrowAnswer: string = '';
    indexArrow: string = '';
    drawAnswer: string = '';
    commentBody: any;
    commentSend: Element | null;
    comment: any;
    answer: string[] = [];
    body: any;
    time: number = Math.floor(Date.now() / 1000);
    userSend: string = './images/Max.png';
    photoSend: string = 'Максим Авдеенко';
    like: boolean = false;
    favoriteOff: string = 'В избранное';
    ratingScore: number = 0;
    value: Element | null | string = '';
           
    constructor() {
        this.commentBody = document.getElementById('comment-body')
        this.commentSend = document.getElementById('comment-send');
        this.comment = comm;   
    }

public sending() {
    this.commentSend?.addEventListener('click', function() {
        event?.preventDefault();
        comm.commentContent();
    })
}

public commentContent() {
        this.comment = {
            answer: [],
            body: this.commentBody?.value,
            time: Math.floor(Date.now() / 1000),
            userSend: 'Максим Авдеенко',
            photoSend: './images/Max.png',
            like: false,
            favoriteOff: 'В избранное',
            ratingScore: 0
        };

        inputF.count.innerText = `Макс. ${inputF.limit} символов`;     // обнуляем при клике счётчик символов
        inputF.btn.style.backgroundColor = '#dbd7d7';           // обнуляем стиль счётчика
        this.commentBody.value = '';

        if(this.comment.body.length != '' && this.comment.body.length <= inputF.limit) {
            this.comments.push(this.comment);

            comm.saveComments();
        }
    }

public saveComments() {     
    localStorage.setItem('comments', JSON.stringify(this.comments));                    // сохраняем в Local  
};
}

let comm = new mainComments();
comm.sending();


