// import
import { Todo } from "./module/class.js";
import {all,fini,Pasfini,add} from "./module/fonction.js"
import { style } from "./module/style.js";

// get element
let body = document.getElementsByTagName('body')[0];

// create
let main = document.createElement('main');
// h1
let h1 = document.createElement('h1')
// div 
let div_grosButton = document.createElement('div')
let divForm = document.createElement('div')
let divInput = document.createElement('div')
let divFormContent = document.createElement('div')
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



// head
document.head.appendChild(style);


// main +div content
body.appendChild(main).appendChild(divForm).append(h1,divFormContent)
divFormContent.append(divInput,div_grosButton)
divInput.append(inputForm,buttonAdd)
h1.appendChild(h1_content)
div_grosButton.append(buttonAll,buttonFini,buttonPasfini);
buttonAdd.appendChild(buttonAdd_content);
buttonAll.appendChild(buttonAll_content);
buttonFini.appendChild(buttonFini_content);
buttonPasfini.appendChild(buttonPasfini_content);
// div liste
main.appendChild(divContent);

// id
divForm.id='form'
divFormContent.id='mainContent'
divInput.id='put'
div_grosButton.id='but'
// class
divInput.classList.add('miseForm')
div_grosButton.classList.add('miseForm')

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
            fini();
            break;
        case buttonAll:
            all();
            break;
        case buttonPasfini:
            Pasfini()
            break;
        default:
            break;
    }

})

