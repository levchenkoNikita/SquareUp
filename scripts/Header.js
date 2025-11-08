class Header {
    selectors = {
        menu: "[data-js-header-menu]",
        burgerButton: "[data-js-burger-button]",
        contactUsButton: "[data-js-contact-us-button]"
    }

    stateClasses = {
        isActive: "is-active",
        isLock: "is-lock"
    }

    constructor() {
        this.menuElement = document.documentElement.querySelector(this.selectors.menu);
        this.bindEvents();
    }

    onClick(event) {
        const currentElement = event.target;

        //  HEADER MENU
        if("jsBurgerButton" in currentElement.dataset) {
            this.handleBurgerButton(currentElement);
        }
    }

    handleBurgerButton(element) {

        const htmlIsLock = document.documentElement.classList.contains(this.stateClasses.isLock);

        if(!htmlIsLock) {
            document.documentElement.classList.add(this.stateClasses.isLock);
        }
        else {
            setTimeout(() => {
                document.documentElement.classList.remove(this.stateClasses.isLock);
            }, 300);
        }

        element.classList.toggle(this.stateClasses.isActive);
        this.menuElement.classList.toggle(this.stateClasses.isActive);
    }

    bindEvents() {
        document.addEventListener('click', (event) => this.onClick(event));
    }

};

export default Header;