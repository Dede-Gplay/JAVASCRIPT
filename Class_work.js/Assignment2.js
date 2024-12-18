let header = document.getElementById('head');
let nav = document.getElementById('navli');
let body = document.getElementById('bod');
let list = document.getElementsByClassName('list1');
let anChor = document.getElementsByClassName("anchor");
let logo = document.getElementById('logo');
let section = document.getElementById('sect');
let buttons = document.getElementById("but");
let next = document.getElementById('but1');
let box = document.getElementById('box');
let image = document.getElementById('image');
let text = document.getElementById('word');
let empt = document.getElementsByClassName('word')

//let img_container = document.getElementById("contained")
for(i=0; i<anChor.length; i++){
    anChor[i].style.textDecoration = 'none';
    anChor[i].style.color = 'white';
    anChor[i].style.fontWeight = 'Bold';
}
for(i=0; i<list.length; i++){
    list[i].style.textDecoration = 'none';
    list[i].style.listStyle = 'none';
    list[i].style.paddingRight = '20px';
}
function changeImage(){
    const img = document.getElementById('myImage');
    img.src = '/ITouch_Home5.jpg';
    img.style.width = '80%';
    img.style.height = '550px'
    img.style.position = 'center';
}
function prevImg(){
    let oldimg = document.getElementById('myImage');
    oldimg.src = "/ITouch_Home4.jpg";
    oldimg.style.width = '80%';
    oldimg.style.height = '550px';
    oldimg.style.position = 'center';
}

function mousein(){
    box.appendChild(text)
}
function moused(){
    box.appendChild(empt)
}

box.addEventListener('mouseenter', mousein)
box.addEventListener('mouseout', moused)


body.style.margin = '0'; 
logo.style.marginTop = '10px';
logo.style.marginLeft = '10px';
logo.style.color = '#b3c100';
header.style.backgroundColor = '#1c4e80';
header.style.width = '100%';
header.style.height = '7vh';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
nav.style.marginRight = '50px';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
//section.style.paddingLeft = '200px';
section.style.marginTop = '10px';
buttons.style.paddingRight = '50px';
buttons.style.paddingLeft = '50px';
buttons.style.display = 'flex';
buttons.style.justifyContent = 'space-between';
//next.style.marginRight = '232px';
box.style.width = '500px';
box.style.height = '500px';
box.style.border = '1px solid black';
box.style.position = 'relative';
box.style.margin = '50px auto';
box.style.overflow = 'hidden';
image.style.position = 'absolute';
image.style.top = '0';
image.style.left = '0';
image.style.width = '100%';
image.style.height = '100%';
image.style.objectFit = 'cover';
text.textContent = 'Piant it your style';
text.style.position = 'absolute';
text.style.color = 'blue';
text.style.fontSize = '30px';
empt.style.position = 'absolute';
empt.style.display = 'none'






