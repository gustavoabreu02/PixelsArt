//requisito 2
let acessoMain = document.querySelector('main');
function coresPaleta () {
    let section = document.createElement('section');
    section.id = 'color-palette'
    acessoMain.appendChild(section);
    let acessoSection = document.querySelector('#color-palette');
    let cores = ['black', 'blue', 'green', 'yellow']
    for (let i = 0; i < cores.length; i += 1) {
        let divColor = document.createElement('div');
        divColor.className = 'color';
        divColor.classList.add(cores[i]);
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
    section.style.margin = '5px'
}
pixels ();

//requisito 6
let corBlack = document.querySelector('.black');
corBlack.classList.add('selected');


