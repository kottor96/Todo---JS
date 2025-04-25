// import
import { Todo } from "./module/class.js";

// get element
let body = document.getElementsByTagName('body')[0];

// create
let header = document.createElement('header');
let main = document.createElement('main');
// h1
let h1 = document.createElement('h1')
// div form
let divForm = document.createElement('div')
export let divContent = document.createElement('div')
// input
let inputForm = document.createElement('input')
// button
let buttonAdd = document.createElement('button')
let buttonAll = document.createElement('button')
let buttonFini = document.createElement('button')
let buttonPasfini = document.createElement('button')

// create content
let h1_content = document.createTextNode('To Do List')
// button
let buttonAdd_content = document.createTextNode("Add")
let buttonAll_content = document.createTextNode("All")
let buttonFini_content = document.createTextNode("Fini")
let buttonPasfini_content = document.createTextNode("Pas Fini")

// header
body.appendChild(header)
header.appendChild(h1)
h1.appendChild(h1_content)
// main +div content
body.appendChild(main).appendChild(divForm).append(inputForm,buttonAdd,buttonAll,buttonFini,buttonPasfini)
buttonAdd.appendChild(buttonAdd_content)
buttonAll.appendChild(buttonAll_content)
buttonFini.appendChild(buttonFini_content)
buttonPasfini.appendChild(buttonPasfini_content)
// div liste
main.appendChild(divContent)


// function
function add(contenu){
    let tudo = new Todo(contenu)
}

divForm.addEventListener('click', (e)=>{
    switch (e.target) {
        case buttonAdd:
            if (!inputForm.value) {
                alert('rentrer une valeur valide')
            } else {
                add(inputForm.value)
            break;
            }
        case buttonFini:
            break;
        case buttonAll:
            break;
        case buttonPasfini:
            break;
        default:
            break;
    }
})