class Menuresponsivo {
    constructor (menurespo, navelist, naveLinks ){
        this.menurespo = document.querySelector(menurespo);
        this.naveList = document.querySelector(navelist);
        this.naveLinks = document.querySelectorAll(naveLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.naveList.classList.toggle(this.activeClass);
        this.menurespo.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menurespo.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menurespo){
            this.addClickEvent();
        }
        return this;
    }
}

const menurespo = new Menuresponsivo (
    ".menu-respo",
    ".nave-list",
    ".nave-list li",
);

menurespo.init();



