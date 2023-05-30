class MainComments {
    comments: any[] = [];
    comAnswers: string[] = [];
    arrowAnswer: any = '';
    indexArrow: HTMLElement | string = '';
    drawAnswer: Element | string = '';
    commentBody: any;
    commentSend: Element | null;
    resultComment: Element | null;
    comment: any;
    answer: string[] = [];
    body: any;
    time: number = Math.floor(Date.now() / 1000);
    userSend: string = '';
    photoSend: string = './images/Max.png';
    like: boolean = false;
    favoriteOff: string = 'В избранное';
    ratingScore: number = 0;
    value: Element | null | string = '';
    out: string = '';
    writeRating: any;
    innerText?: Element | null;
    
    
    constructor() {
        this.commentBody = document.getElementById('comment-body')
        this.commentSend = document.getElementById('comment-send');
        this.comment = this.comment;   
        this.resultComment = document.getElementById('result-comment');
    }

public sending() {                                                   // создаём отправку, отображение и сохранение комментов
    this.commentSend?.addEventListener('click', function(): void {
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
            comm.showComments();
            comm.saveComments();
            comm.toggleHeart();
            comm.changeRating();
            answ.createAnswer();
        }
    }

public saveComments() {     
    localStorage.setItem('comments', JSON.stringify(this.comments));                    // сохраняем в Local  
};

public localComments() {                                  // отображаем из Local
    if(localStorage.getItem('comments')) {
        this.comments = JSON.parse(localStorage.getItem('comments') || '{}');
    }
    comm.showComments();
    comm.toggleHeart();
    comm.changeRating();
    answ.createAnswer();
}

public showComments() {                          // рисуем отправленный коммент
    this.resultComment!.innerHTML = '';

    this.comments.forEach(function(item: any, index): void {
        comm.out = '';
        comm.out += `<div class="image-alex-sent"></div>`;
        comm.out += `<div class="user-sent">${item.userSend}</div>`;
        comm.out += `<div class="text-date">${comm.timeConverter(item.time)}</div>`;
        comm.out += `<p class="text-sent">${item.body}</p>`;
        comm.out += `<div class="toolbar-sent">
                   <button class="button-bordernone btn-answer" data-index-arrow="${index}">
                       <svg class="toolbar-sent_svg-answer" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M8.004 2.98l-6.99 4.995 6.99 4.977V9.97c1.541-.097 2.921-.413 7.01 3.011-1.34-4.062-3.158-6.526-7.01-7.001v-3z" fill="#918d8d"></path>
                       </svg>
                   </button>
                   <h3 class="toolbar-sent_text">Ответить</h3>
                   <div class="inFavorite ${item.like ? 'toggleHeart' : ''}" data-index="${index}">
                        ${comm.paintHeart(item.like)}
                   </div>
                   <div class="rating-minus">
                       <button class="button-bordernone rating btn__rating-minus" data-index-change="${index}">
                           <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle opacity="0.1" cx="10" cy="13" r="10" fill="black"/>
                           <path d="M13.0696 11.6399V13.2955H7.26562V11.6399H13.0696Z" fill="#FF0000"/>
                       </svg>
                       </button>
                   </div>
                   <h3 class="toolbar-sent_text-rating rating-text-${index}">${item.ratingScore}</h3>
                   <div class="rating-plus">
                   <button class="button-bordernone rating btn__rating-plus" data-index-change="${index}">
                       <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <circle opacity="0.1" cx="10" cy="13" r="10" fill="black"/>
                       <path d="M9.13281 17.169V8.52699H10.8523V17.169H9.13281ZM5.67472 13.7045V11.9851H14.3168V13.7045H5.67472Z" fill="#8AC540"/>
                       </svg>
                   </button>
               </div>
                </div>
                <div class="block-result-answer answer-field-${index}"></div>
               </div>`; 
       
       comm.resultComment!.innerHTML += comm.out;
       
     /*    answerContentDraw(index);
        toggleHeartAnswer(index);
        changeRatingAnswer(index); */
    
    });
};

public timeConverter(UNIX_timestamp: number) {
    let a: Date = new Date(UNIX_timestamp * 1000);
    let months: string[] = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let year: any = a.getFullYear();
    let month: string = months[a.getMonth()];
    let date: any = a.getDate();
    let hour: number = a.getHours();
    let min: number = a.getMinutes();
    let sec: number = a.getSeconds();
    let time: string = date + '.' + month + ' ' + hour + ':' + min;
    return time;
};

public paintHeart(like: any): string {                 //отрисовку в зависимости от Like в отдельную функцию, ею всегда и будем пользоваться
    let htmlHeart: string = ''; 
    if(like){   
        htmlHeart = `<button class="button-bordernone">
            <svg class="toolbar-sent_svg-heartempty" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g opacity="0.4">
            <mask id="mask0_12_601" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_12_601)">
            <rect x="-1.25" width="29.5" height="27.5" fill="black"/>
            </g>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_12_601" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_12_601" width="96" height="96" xlink:href="data:image/png;base64,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"/>
            </defs>
            </svg>
        </button>
        <h3 class="toolbar-sent_text">В избранном</h3>`;
    }else{
        htmlHeart = `<button class="button-bordernone">
            <svg  class="toolbar-sent_svg-heartempty" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_3_291" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="url(#pattern0)"/>
            </mask>
            <g mask="url(#mask0_3_291)">
            <rect opacity="0.4" x="2" y="4" width="21" height="19" fill="black"/>
            <path d="M3.5 9.00004C2.5 12.9999 8.83333 17.3333 12 20C20 14.4 21.1667 10.5001 20.5 9.00004C18.5 4.20004 13.8333 6.16667 12 8.00001C7 3.5 4.5 6.50002 3.5 9.00004Z" fill="white"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_3_291" transform="scale(0.0104167)"/>
            </pattern>
            <image id="image0_3_291" width="96" height="96" xlink:href="data:image/png;base64,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"/>
            </defs>
            </svg>
        </button>
        <h3 class="toolbar-sent_text">В избранное</h3>`;
    };
    return htmlHeart;
};

public toggleHeart() {                                                       // вешаем клик на ЛАЙК "В избранное" комментов
    document.querySelectorAll('.inFavorite').forEach(function(item): void {
        item.addEventListener("click", function(event: any): void {
            let favoriteBtn: HTMLElement | null = event.target!.closest('.inFavorite');
            favoriteBtn!.classList.toggle("toggleHeart");
            const index: any = favoriteBtn!.getAttribute('data-index');
            console.log(index)

            if(favoriteBtn!.classList.contains("toggleHeart")) {
                //перерисрвываем верстку лайка передавая значение тру
                favoriteBtn!.innerHTML = comm.paintHeart(true);
                //тут перезаписываем значение лайка в нашем массиве
                comm.comments[index].like = true;
            }else if(!favoriteBtn!.classList.contains("toggleHeart")){
                //перерисрвываем верстку лайка передавая значение фолс
                favoriteBtn!.innerHTML = comm.paintHeart(false);
                //тут перезаписываем значение лайка в нашем массиве
                comm.comments[index].like = false;
            };
            //перезаписываем в локальном хранилище данные чтобы были актуальны
            comm.saveComments();
        });
    });
};

public changeRating() {                                                     // вешаем клики на РЕЙТИНГ комменты
    document.querySelectorAll('.rating').forEach(function(item): void {
        item.addEventListener("click", function(event: any): void {    
            const btn: Element | null = event.target!.closest('.rating');
            const indRat: any = btn!.getAttribute('data-index-change');

            if(btn!.classList.contains('btn__rating-plus')){
                comm.comments[indRat].ratingScore++;
            };
            if(btn!.classList.contains('btn__rating-minus')){
                comm.comments[indRat].ratingScore--;
            };
           
            comm.writeRating = document.querySelector(`.rating-text-${indRat}`);
            comm.writeRating.innerText = comm.comments[indRat].ratingScore;
            
            comm.saveComments();
        });
    });
};
}


let comm = new MainComments();
comm.sending();
comm.localComments();


