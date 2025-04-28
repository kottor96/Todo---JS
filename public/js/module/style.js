//css
let style = document.createElement('style')
style.innerHTML = `
    body{
        background: linear-gradient(300deg, rgb(88, 39, 48),rgb(12, 52, 63));
        background-size: 400% 400%;
        background-repeat: no-repeat;
        animation: bgStyler 10s linear infinite alternate;
        padding: 10vh 10vw;
    }
    h1{
        font-size: clamp(3rem, 5vw, 5rem);
        color:rgb(102, 120, 137);
    }
    main {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .carte-todo{
        background-color: #1976D2;
        transition: all 0.5s ease;
        border: 10px #1976D2 solid;
        color: white;
        margin: 30px 20px;
        padding: 20px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1vw;
    }
    .carte-todoNot{
        background-color: #4FC3F7;
        transition: all 0.5s ease;
        border: 10px #1976D2 solid;
        color: white;
        margin: 30px 20px;
        padding: 20px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3vw;
    }
    .carte-todo p,.carte-todoNot p{
        font-size: clamp(2em, 2vw, 5em);
        overflow-wrap: break-word;
        word-break: break-word;
    }
    .btn-todo{
        display: flex;
        flex-direction: column;
        gap: 10px;
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
        justify-content: center;
        flex-direction: column;
        gap: 5vh;
    }
    #put button{
        background-color: rgb(54, 164, 104);
         /* border: none; */
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
    /* animation */
    @keyframes bgStyler{
        0% {
            background-position: 0% 25%;
        }
        100% {
            background-position: 100% 75%;
        }
    }
    @keyframes bgStylerMobile {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 50% 50%;
        }
    }
    /*media*/
    @media (max-width: 768px) {
        .btn-todo{
            flex-direction: row;
            gap:3vw;
            flex-wrap: wrap;
        }
        .carte-todo,.carte-todoNot{
            flex-direction: column;
            margin: 0;
            margin-bottom : 20px;
            width: 100%;
        }
        body{
            padding: 0;
            margin: 0;
            min-height: 100vh;
            animation: bgStylerMobile 15s linear infinite alternate;
        }
        #form{
            margin: 10px 10px;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 3vh;
            margin-bottom: 10vw;
        }
        #put input{
            height: 100%;
            width: 100%;
        }
           
    }
    @media (max-width: 320px){
        .btn-todo{
            flex-direction:column;
            align-items: center;
            justify-content: center;
        }
    }

`
export {style}