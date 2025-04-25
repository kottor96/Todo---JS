let body = document.getElementsByTagName('body')[0];
let header = document.createElement('header');
let main = document.createElement('main');
let h1 = document.createElement('h1')
let h1Content = document.createTextNode('To Do List')

body.appendChild(header)
body.appendChild(main)
header.appendChild(h1)
h1.appendChild(h1Content)