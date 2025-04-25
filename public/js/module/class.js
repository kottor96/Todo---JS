import { divContent } from "../main.js";
class Todo {
    static index = 0
    constructor(contenu) {
        this.contenu = contenu
        this.index = Todo.index
        this.etat = false
        Todo.index++
        this.createTodo()
    }
    createTodo(){
        let divTodo = document.createElement('div')
        let pTodo = document.createElement('p')
        let pTodo_content = document.createTextNode(this.contenu)
        let buttonDone = document.createElement('button')
        let buttonModif = document.createElement('button')
        let buttonSupprimer = document.createElement('button')

        let buttonDone_content = document.createTextNode('Done')
        let buttonSupprimer_content = document.createTextNode('Supprimer')
        let buttonModif_content = document.createTextNode('Modifier')
        let div_btn=document.createElement('div')
        
        divContent.appendChild(divTodo)
        divTodo.append(pTodo,div_btn)
        div_btn.append(buttonDone,buttonModif,buttonSupprimer)

        pTodo.appendChild(pTodo_content)

        buttonDone.appendChild(buttonDone_content)
        buttonModif.appendChild(buttonModif_content)
        buttonSupprimer.appendChild(buttonSupprimer_content)

        divContent.addEventListener('click', (e)=>{
            switch (e.target) {
                case buttonDone:
                    this.etat=true
                    console.log(this.etat);
                    break;
                case buttonModif:
                    console.log('je vais faire une modif');
                    this.modifier(div_btn,buttonModif)
                    break; 
                case buttonSupprimer:
                    this.supprimer(divTodo)
                    break; 
                default:
                    break;
            }
        })
    };
    supprimer(div){
        div.remove()
    }
    modifier(div,buttonR,buttonP){
        let input_modif = document.createElement('input');
        let button_confirm = document.createElement('button');
        buttonP.remove();
        div.insertBefore(input_modif,buttonP);
        buttonR.innerText=confirmer;
    }
}

export {Todo}