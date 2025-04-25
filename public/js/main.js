// get element
let body = document.getElementsByTagName('body')[0];

// create
let header = document.createElement('header');
let main = document.createElement('main');
// h1
let h1 = document.createElement('h1')
// div form
let divForm = document.createElement('div')
// input
let input = document.createElement('input')
// button
let buttonAdd = document.createElement('button')
let buttonAll = document.createElement('button')
let buttonFini = document.createElement('button')
let buttonPasfini = document.createElement('button')

// create content
let h1Content = document.createTextNode('To Do List')

// append
body.appendChild(header)
body.appendChild(main).appendChild(input,buttonAdd)
header.appendChild(h1)
h1.appendChild(h1Content)
