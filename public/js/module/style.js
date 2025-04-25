//css
let style = document.createElement('style')
style.innerHTML = `
    body{
        background-image: linear-gradient(to right,blue,cyan);
    }
    .carte-todo{
        background-color: red;
        color: white;
        margin: 30px 20px;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-item: center;
    }
    .carte-todo p{
        font-size: 1em
    }
    .btn-todo{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .btn-todo button{
        padding:10px 20px;
        border-radius : 10px;
        width: 100px;
    }
    .btn-todo input{
        box-sizing: border-box;
        height: 30px;
        width: 100px;
    }
`
export {style}