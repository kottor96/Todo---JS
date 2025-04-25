import { divContent } from "../main.js";
class Todo {
    constructor(contenu) {
        this.contenu = contenu
    }
    createTodo(){
        let pTodo = document.createElement('p')
        let pTodo_content = document.createTextNode(this.contenu)
        divContent.appendChild(pTodo).appendChild(pTodo_content)
    }
}
export {Todo}