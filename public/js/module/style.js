//css
let style = document.createElement('style')
style.innerHTML = `
    body{
        background-image: linear-gradient(to right,blue,cyan);
        padding:10vh 10vw;
    }
    h1{
        font-size: clamp(3rem, 5vw, 5rem);
        color:rgb(102, 120, 137);
    }
    .carte-todo{
        background-color: green;
        color: white;
        margin: 30px 20px;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-item: center;
    }
    .carte-todoNot{
        background-color: red;
        color: white;
        margin: 30px 20px;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-item: center;
    }
    .carte-todo p,.carte-todoNot p{
        font-size: 2em;
    }
    .btn-todo{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .btn-todo button,#mainContent button{
        padding:10px 20px;
        border-radius : 10px;
        width: 100px;
    }
    .btn-todo input,#mainContent input{
        box-sizing: border-box;
        padding: 10px;
        min-height: 30px;
        width: 100px;
    }
    #form{
        margin: 30px 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 3vh;
        margin-bottom: 10vw;
    }
    #form input,#form button{
        box-shadow: 5px -5px 12px rgba(0, 0, 0, 0.4);
    }
    #mainContent{
        display: flex;
        justify-content:center;
        flex-direction:column;
        gap:5vh;
    }
    #put button{
        background-color: rgb(54, 164, 104);
        // border:none;
    }
    #put input{
        box-sizing: border-box;
        height: 100%;
        width: 50vw;
        border-radius:15px;
        font-size: 2em;
    }
    .miseForm{
        display: flex;
        justify-content:center;
        gap:3vw;
        flex-wrap: wrap;
    }
`
export {style}