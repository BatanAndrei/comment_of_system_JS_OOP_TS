class NavigationBar {
    selectHeader: NodeListOf<Element>;
    selectItem: NodeListOf<Element>;
    selectArrow: Element | null;
    text?: Element | null;
    select: Element | null;
    currentText: any;
    innerText: any;
    parentElement: any;
    closest: any;
    classList: any;

    constructor() {
        this.selectHeader  = document.querySelectorAll('.header-tabs_select-header');
        this.selectItem = document.querySelectorAll('.header-tabs_select-item');
        this.selectArrow = document.querySelector('.svg-arrow');
        this.select = document.querySelector('.header-tabs_select-current');
        this.text = this.text;
        this.innerText = this.innerText;
        this.currentText = this.currentText;
    }

    public selectitems() {         // создание селекта
        this.selectHeader.forEach(item => {
            item.addEventListener('click', this.selectToggle); // переключаем класс .is-active у .header-tabs_select показывая .header-tabs_select-body.
        });
    
        this.selectItem.forEach(item => { //нажимаем на пункты .header-tabs_select-body и записываем в .header-tabs_select-current.
            item.addEventListener('click', this.selectChoose);
        }); 
     }

    public selectToggle() {     //переключает .is-active у родителя .header-tabs_select-header (т.е. у .header-tabs_select)
        this.parentElement.classList.toggle('is-active'); // а .header-tabs_select имея чайлд .header-tabs_select-body, показывает его.
    };

    public selectChoose() {
        this.text = this.innerText; //записываем в text пункт на который мы нажимаем
        this.select = this.closest('.header-tabs_select'); // возвращает ближайший родительский элемент (или сам элемент - .header-tabs_select)
        this.currentText = this.select?.querySelector('.header-tabs_select-current'); // записываем то что у нас в .header-tabs_select-current
        this.currentText.innerText = this.text; //записываем в .header-tabs_select-current то что у нас в text
        this.select?.classList.remove('is-active'); // убираем .is-active и .header-tabs_select-body пропадает
        //this.filterSelect(this.text);
        navBar.removeCheckMarkClass();
        this.classList.add('check-mark'); // дабавляем галочку на выбранный пункт
        console.log(this.innerText)
    };

    public removeCheckMarkClass() {
        this.selectItem.forEach(item => {
            item.classList.remove('check-mark'); // удаляем класс .check-mark (убираем галочку)
        });
    };

    public reverseArrow() {
        this.selectArrow?.addEventListener('click', function(this: any): void {
            this.classList.toggle('reverse-arrow'); // переварачиваем треугольник svg
        })
    } 
}

let navBar = new NavigationBar();
navBar.selectitems();
navBar.reverseArrow();

