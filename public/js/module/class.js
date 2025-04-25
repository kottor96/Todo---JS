import { divContent } from "../main.js";
class Todo {
    static todoListe = []
    constructor(contenu) {
        this.contenu = contenu
        this.etat = false
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
        Todo.todoListe.push(divTodo)
        
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
                    this.modifier(div_btn,buttonModif,buttonSupprimer,pTodo)
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
    modifier(div,buttonR,buttonP,text){
        let inputModif = document.createElement('input');
        let buttonConfirm = document.createElement('button');
        let buttonConfirm_content = document.createTextNode('Confirmer')
        console.log(buttonR);
        
        buttonR.remove();
        div.insertBefore(buttonConfirm,buttonP);
        div.insertBefore(inputModif,buttonConfirm);
        buttonConfirm.appendChild(buttonConfirm_content)        
        buttonConfirm.addEventListener('click',()=>{
            if (!inputModif.value) {
                alert('ecris un truc')
            } else {
                this.contenu=inputModif.value                
                text.textContent = this.contenu
                buttonConfirm.remove()
                inputModif.remove()
                div.insertBefore(buttonR,buttonP)
            }
        })
    }
}

export {Todo}