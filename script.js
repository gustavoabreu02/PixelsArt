function gerar_cor_hexadecimal()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}
let Listacores = [];
for (let i3 = 0; i3 < 4; i3 += 1) {
Listacores.push(gerar_cor_hexadecimal())
}
Listacores[0] = 'black'
//requisito 2
let acessoMain = document.querySelector('main');
function coresPaleta () {
    let section = document.createElement('section');
    section.id = 'color-palette'
    acessoMain.appendChild(section);
    let acessoSection = document.querySelector('#color-palette');
    let cores = ['black', 'blue', 'green', 'yellow']
    acessoMain.style.marginLeft = '43.3%'
    for (let i = 0; i < cores.length; i += 1) {
        let divColor = document.createElement('div');
        divColor.className = 'color';
        divColor.style.border = '1px solid black';
        divColor.style.height = '50px';
        divColor.style.width = '50px';
        divColor.style.display = 'inline-block';
        divColor.style.margin = '5px'
        divColor.style.backgroundColor = Listacores[i]
        acessoSection.appendChild(divColor)
    }
} 
coresPaleta(); 

//requisito 4 e 10
function pixels () {
    let section22 = document.createElement('section');
    let lugar = document.querySelector('#color-palette')
    lugar.appendChild(section22)
    let section = document.createElement('section');
    section.id = 'pixel-board';
    acessoMain.appendChild(section);
    let acessoSection = document.querySelector('#pixel-board');
    let button = document.createElement('button');
    let input = document.createElement('input');
    input.id = 'board-size';
    button.id = 'generate-board';
    button.innerText = 'VQV';
    input.style.marginTop = '-100px'
    input.style.height = '17px'
    input.style.width = '140px'
    input.style.top = '202.3px'
    input.style.left = '47.3%'
    button.style.padding = '4px'
    button.style.width = '70px'
    button.style.borderRadius = '8%'
    button.style.top = '200px'
    button.style.left = '55.6%'
    acessoMain.appendChild(button);
    acessoMain.appendChild(input);
    for (let i = 0; i < 25; i += 1) {
        let divPixels = document.createElement('div');
        divPixels.className = 'pixel';
        divPixels.style.backgroundColor = 'white';
        divPixels.style.border = '1px solid black';
        divPixels.style.height = '40px';
        divPixels.style.width = '40px';
        acessoSection.appendChild(divPixels)
       }
    button.addEventListener('click', evento5)
    function evento5 () {
        let pixels = document.querySelectorAll('.pixel');
        let acesso = document.querySelector('#pixel-board').innerHTML = '';
        let valor = input.value
        let resul = parseInt(valor)
        if (resul > 50) {
            resul = 50
        }
    if (resul >= 5 && resul <= 50) {
        for (let i2 = 0; i2 < resul * resul; i2 += 1) {
            let section = document.querySelector('#pixel-board')
            let divPixels = document.createElement('div');
            divPixels.className = 'pixel';
            divPixels.style.backgroundColor = 'white';
            divPixels.style.border = '1px solid black';
            divPixels.style.height = '40px';
            divPixels.style.width = '40px';
            section.style.display = 'grid'
            section.style.gridTemplateColumns = 'repeat(' + resul + ',40px)'
            section.style.marginLeft = '2.3%'
            section.style.marginTop = '90px'
            acessoSection.appendChild(divPixels)
        }
        pintaPixel ();
    } else if (valor = ' ') {
        alert("Board inválido!")
        for (let i = 0; i < 25; i += 1) {
            let divPixels = document.createElement('div');
            divPixels.className = 'pixel';
            divPixels.style.backgroundColor = 'white';
            divPixels.style.border = '1px solid black';
            divPixels.style.height = '40px';
            divPixels.style.width = '40px';
            acessoSection.appendChild(divPixels)
           }

    }
 }
            section.style.display = 'grid'
            section.style.gridTemplateColumns = 'repeat(5,40px)'
            section.style.marginLeft = '2.3%'
            section.style.marginTop = '100px' 
}
pixels ();

//requisito 6
let corBlack = document.querySelectorAll('.color');
corBlack[0].classList.add('selected');

//requisito 7
function selecionaCor () {
let sectionCores = document.querySelector('#color-palette');
let cores = document.querySelectorAll('.color')
sectionCores.addEventListener('click', evento);
function evento () {
    for (let i = 0; i < cores.length; i += 1) {
        if (event.target.className == 'color') {
            cores[i].className = 'color'
            event.target.className = 'color selected'
        } else if (event.target.className == 'color selected') {
            cores[i].className = 'color'
            event.target.className = 'color selected'
        }
    }
 }
}
selecionaCor ()

//requisito 8
function pintaPixel () {
let sectionCores = document.querySelector('#color-palette');
let cores = document.querySelectorAll('.color');
let pixel = document.querySelectorAll('.pixel')
let sectionPixel = document.querySelector('#pixel-board');
for (let i2 = 0; i2 < pixel.length; i2 += 1) {
pixel[i2].addEventListener('click', evento2);
}
function evento2 () {
for (let i = 0; i < cores.length; i += 1) {
    cores[i].id = Listacores[i]
    sectionCores.appendChild(cores[i])
    if (cores[i].className == 'color selected') {
        event.target.style.backgroundColor = Listacores[i]
    }
}
 }
}
pintaPixel ();

//requisito 9
function limpaPixel () {
    let button = document.createElement('button');
    button.innerText = 'Limpar'
    button.id = 'clear-board'
    button.style.padding = '4px'
    button.style.width = '75px'
    button.style.borderRadius = '8%'
    button.style.position = 'absolute'
    button.style.top = '200px'
    button.style.left = '42.9%'
    acessoMain.appendChild(button)
    let pixel = document.querySelectorAll('.pixel')
    button.addEventListener('click', evento3);
    function evento3 () {
        let pixel = document.querySelectorAll('.pixel')
        for (let i2 = 0; i2 < pixel.length; i2 += 1) {
        pixel[i2].style.backgroundColor = 'white'
        }    
    }
}
limpaPixel ();




