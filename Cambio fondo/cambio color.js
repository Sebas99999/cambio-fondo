const bto=document.querySelector('button');
const txt=document.querySelector('span')
const body=document.querySelector('body');

const colores=['yellow', 'green','blue','salmon'];
const amarillo=['Amarillo']
const verde=['Verde']
const azul=['Azul']
const piel=['Piel']

bto.addEventListener('click',fondo);

function fondo()
{
    var indice=parseInt(Math.random(1)*colores.length);
    body.style.backgroundColor=colores[indice];
    
    if(indice===0){
        txt.innerText=amarillo;
     }else if (indice===1){
        txt.innerText=verde;
     }else if(indice===2){
        txt.innerText=azul
     }else if(indice===3){
        txt.innerText=piel
     }}