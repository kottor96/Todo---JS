import { divContent } from "../main.js";
class Todo {
    static index = 0
    constructor(contenu) {
        this.contenu = contenu
        this.index = Todo.index
        Todo.index++
        this.createTodo()
    }
    createTodo(){
        let pTodo = document.createElement('p')
        let pTodo_content = document.createTextNode(this.contenu)
        divContent.appendChild(pTodo).appendChild(pTodo_content)
    }
}
export {Todo}