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
        let buttonDone_contentBis = document.createTextNode('UnDone')
        let buttonSupprimer_content = document.createTextNode('Supprimer')
        let buttonModif_content = document.createTextNode('Modifier')
        let div_btn=document.createElement('div')
        
        divContent.appendChild(divTodo)
        Todo.todoListe.push({div:divTodo,contenu:this})
        // div
        divTodo.append(pTodo,div_btn)
        div_btn.append(buttonDone,buttonModif,buttonSupprimer)

        // pcontent
        pTodo.appendChild(pTodo_content)
        // btn
        buttonDone.appendChild(buttonDone_content)
        buttonModif.appendChild(buttonModif_content)
        buttonSupprimer.appendChild(buttonSupprimer_content)
        // class
        div_btn.classList.add('btn-todo')
        divTodo.classList.add('carte-todoNot')

        divContent.addEventListener('click', (e)=>{
            switch (e.target) {
                case buttonDone:
                    buttonDone.innerText=''
                    if (this.etat) {
                        buttonDone.appendChild(buttonDone_content)
                        divTodo.classList='carte-todoNot'
                        this.etat=false
                    } else {
                        buttonDone.appendChild(buttonDone_contentBis)
                        divTodo.classList='carte-todo'
                        this.etat=true
                    }
                    
                    
                    break;
                case buttonModif:
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
        // Todo.todoListe.splice(Todo.todoListe.indexOf(div),1)
        const index = Todo.todoListe.findIndex(todo => todo.div === div);
        if (index !== -1) {
            Todo.todoListe.splice(index, 1);
        }
    }
    modifier(div,buttonR,buttonP,text){
        let inputModif = document.createElement('input');
        let buttonConfirm = document.createElement('button');
        let buttonConfirm_content = document.createTextNode('Confirmer');
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