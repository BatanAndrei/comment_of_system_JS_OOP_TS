var NavigationBar = /** @class */ (function () {
    function NavigationBar() {
        this.selectHeader = document.querySelectorAll('.header-tabs_select-header');
        this.selectItem = document.querySelectorAll('.header-tabs_select-item');
        this.selectArrow = document.querySelector('.svg-arrow');
        this.select = document.querySelector('.header-tabs_select-current');
        this.text = this.text;
        this.innerText = this.innerText;
        this.currentText = this.currentText;
    }
    NavigationBar.prototype.selectitems = function () {
        var _this = this;
        this.selectHeader.forEach(function (item) {
            item.addEventListener('click', _this.selectToggle); // переключаем класс .is-active у .header-tabs_select показывая .header-tabs_select-body.
        });
        this.selectItem.forEach(function (item) {
            item.addEventListener('click', _this.selectChoose);
        });
    };
    NavigationBar.prototype.selectToggle = function () {
        this.parentElement.classList.toggle('is-active'); // а .header-tabs_select имея чайлд .header-tabs_select-body, показывает его.
    };
    ;
    NavigationBar.prototype.selectChoose = function () {
        var _a, _b;
        this.text = this.innerText; //записываем в text пункт на который мы нажимаем
        this.select = this.closest('.header-tabs_select'); // возвращает ближайший родительский элемент (или сам элемент - .header-tabs_select)
        this.currentText = (_a = this.select) === null || _a === void 0 ? void 0 : _a.querySelector('.header-tabs_select-current'); // записываем то что у нас в .header-tabs_select-current
        this.currentText.innerText = this.text; //записываем в .header-tabs_select-current то что у нас в text
        (_b = this.select) === null || _b === void 0 ? void 0 : _b.classList.remove('is-active'); // убираем .is-active и .header-tabs_select-body пропадает
        //this.filterSelect(this.text);
        navBar.removeCheckMarkClass();
        this.classList.add('check-mark'); // дабавляем галочку на выбранный пункт
        console.log(this.innerText);
    };
    ;
    NavigationBar.prototype.removeCheckMarkClass = function () {
        this.selectItem.forEach(function (item) {
            item.classList.remove('check-mark'); // удаляем класс .check-mark (убираем галочку)
        });
    };
    ;
    NavigationBar.prototype.reverseArrow = function () {
        var _a;
        (_a = this.selectArrow) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            this.classList.toggle('reverse-arrow'); // переварачиваем треугольник svg
        });
    };
    return NavigationBar;
}());
var navBar = new NavigationBar();
navBar.selectitems();
navBar.reverseArrow();
