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
        divColor.style.backgroundColor = cores[i];
        acessoSection.appendChild(divColor)
    }
} 
coresPaleta(); 

//requisito 4
function pixels () {
    let section = document.createElement('section');
    section.id = 'pixel-board';
    acessoMain.appendChild(section);
    let acessoSection = document.querySelector('#pixel-board')
    for (let i = 0; i < 25; i += 1) {
        let divPixels = document.createElement('div');
        divPixels.className = 'pixel';
        divPixels.style.backgroundColor = 'white';
        divPixels.style.border = '1px solid black';
        divPixels.style.height = '40px';
        divPixels.style.width = '40px';
        acessoSection.appendChild(divPixels)
    }
    section.style.display = 'grid'
    section.style.gridTemplateColumns = '40px 40px 40px 40px 40px'
    section.style.marginLeft = '2.3%'
    section.style.marginTop = '90px'
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
let Listacores = ['black', 'blue', 'green', 'yellow'];
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
    button.style.position = 'absolute'
    button.style.marginTop = '-270px'
    button.style.marginLeft = '75px'
    button.style.padding = '6px'
    button.style.width = '100px'
    button.style.borderRadius = '8%'
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


