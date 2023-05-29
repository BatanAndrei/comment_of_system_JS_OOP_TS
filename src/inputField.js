var InputField = /** @class */ (function () {
    function InputField() {
        this.textlength = 0;
        this.count = document.querySelector('.count-comment-body');
        this.message = document.querySelector('.text-long-message');
        this.textarea = document.querySelector('#comment-body');
        this.btn = document.querySelector('.button');
        this.limit = 10;
    }
    ;
    InputField.prototype.auto_grow = function (element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight) + "px";
    };
    ;
    InputField.prototype.validateTextarea = function () {
        var _this = this;
        this.textarea.addEventListener('input', function () {
            _this.textlength = _this.textarea.value.length;
            _this.count.innerText = "".concat(_this.textlength, "/").concat(_this.limit);
            if (_this.textlength > _this.limit) {
                _this.count.innerHTML = "".concat(_this.textlength, "/").concat(_this.limit);
                _this.count.style.color = '#FF0000';
                _this.message.innerText = "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435";
                _this.message.style.color = '#FF0000';
                console.log(_this.innerText);
                _this.btn.style.backgroundColor = '#dbd7d7';
                _this.btn.style.color = '#918d8d';
            }
            else if (_this.textlength <= 0) {
                _this.count.innerHTML = "\u041C\u0430\u043A\u0441. ".concat(_this.limit, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
                _this.count.style.color = '#918d8d';
                _this.btn.style.backgroundColor = '#dbd7d7';
                _this.btn.style.color = '#918d8d';
            }
            else if (_this.textlength <= _this.limit) {
                _this.message.innerText = '';
                _this.count.style.color = '#918d8d';
                _this.btn.style.backgroundColor = '#ABD873';
                _this.btn.style.color = '#000000';
            }
            else {
                _this.count.innerText = "\u041C\u0430\u043A\u0441. ".concat(_this.limit, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
            }
        });
    };
    return InputField;
}());
var mainComments = new InputField();
mainComments.validateTextarea();
mainComments.auto_grow(this);
