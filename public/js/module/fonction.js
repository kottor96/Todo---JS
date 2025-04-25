import { Todo } from "./class.js";
import { divContent } from '../main.js'
// function
function add(contenu){
    let tudo = new Todo(contenu)
}
function all(){
    Todo.todoListe.forEach(element => {
        divContent.appendChild(element.div)
    });
}
function fini(){
    Todo.todoListe.forEach(element => {
        if (!element.contenu.etat) {
            element.div.remove()
        } else {
            divContent.appendChild(element.div)
        }
    });
}
function Pasfini(){
    Todo.todoListe.forEach(element => {
        if (element.contenu.etat) {
            element.div.remove()
        } else {
            divContent.appendChild(element.div)
        }
    });
}
export {all,fini,Pasfini,add}