class InputField {
    count: any;
    message?: any;
    textarea: any;
    btn: any;
    limit: number;
    textlength: number = 0;
    innerText?: Element | null;
    value: string = '';

    constructor() {
        this.count = document.querySelector('.count-comment-body');
        this.message = document.querySelector('.text-long-message')
        this.textarea = document.querySelector('#comment-body');
        this.btn = document.querySelector('.button');
        this.limit = 1000; 
    };

    public validateTextarea() {
        this.textarea.addEventListener('input', () => {
        this.textlength = this.textarea.value.length;
        this.count.innerText = `${this.textlength}/${this.limit}`;

        if(this.textlength > this.limit) {
            this.count.innerHTML = `${this.textlength}/${this.limit}`;
            this.count.style.color = '#FF0000';
    
            this.message.innerText = `Слишком длинное сообщение`
            this.message.style.color = '#FF0000';
    
            this.btn.style.backgroundColor = '#dbd7d7';
            this.btn.style.color = '#918d8d';
        }else if(this.textlength <= 0) {
            this.count.innerHTML = `Макс. ${this.limit} символов`;  
            this.count.style.color = '#918d8d';
    
            this.btn.style.backgroundColor = '#dbd7d7';
            this.btn.style.color = '#918d8d';
        }else if(this.textlength <= this.limit) {
            this.message.innerText ='';
    
            this.count.style.color = '#918d8d';
    
            this.btn.style.backgroundColor = '#ABD873';
            this.btn.style.color = '#000000';
        }else{
            this.count.innerText = `Макс. ${this.limit} символов`;
        }
        
    });
}
}

let inputF = new InputField();
inputF.validateTextarea();
