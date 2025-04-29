export class Menu {
    constructor (construct) {
        this.construct = construct
    }

    load () {
        this.construct.innerHTML = '<h1>This is the menu page!</h1>';
    }
}