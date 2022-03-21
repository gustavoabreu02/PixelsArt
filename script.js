//requisito 1
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
        divColor.style.border = '1px solid black';
        divColor.style.height = '110px';
        divColor.style.width = '110px';
        divColor.style.display = 'inline-block';
        divColor.style.margin = '5px'
        divColor.style.backgroundColor = cores[i];
        acessoSection.appendChild(divColor)
    }
} 
coresPaleta(); 
