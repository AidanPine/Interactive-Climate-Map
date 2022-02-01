const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

const zoomElement = document.querySelector(".map");
let zoom = 1;
const ZOOM_SPEED = 0.3;

document.addEventListener("wheel", function(e) {
    if (e.deltaY < 0) {
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;
    }
    else {
        if (zoom > 1)
            zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
    }
})

var climateArray = [];
climateArray[0] = document.querySelector('#Cfb');
climateArray[1] = document.querySelector('#Af');
climateArray[2] = document.querySelector('#Am');
climateArray[3] = document.querySelector('#Aw_As');
climateArray[4] = document.querySelector('#BSh');
climateArray[5] = document.querySelector('#BSk');
climateArray[6] = document.querySelector('#BWh');
climateArray[7] = document.querySelector('#BWk');
climateArray[8] = document.querySelector('#Cfa');
climateArray[9] = document.querySelector('#Csa');
climateArray[10] = document.querySelector('#Csb');
climateArray[11] = document.querySelector('#Cwa');
climateArray[12] = document.querySelector('#Cwb');
climateArray[13] = document.querySelector('#Dfa');
climateArray[14] = document.querySelector('#Dfb');
climateArray[15] = document.querySelector('#Dfc');
climateArray[16] = document.querySelector('#Dfd');
climateArray[17] = document.querySelector('#Dsa');
climateArray[18] = document.querySelector('#Dsb');
climateArray[19] = document.querySelector('#Dsc_Dsd');
climateArray[20] = document.querySelector('#Dwa');
climateArray[21] = document.querySelector('#Dwb');
climateArray[22] = document.querySelector('#Dwd');
climateArray[23] = document.querySelector('#EF');
climateArray[24] = document.querySelector('#ET');
climateArray[25] = document.querySelector('#Dwc');

for (let j = 0; j < climateArray.length; j++) {
    climateArray[j].addEventListener('click', () => {
        climateArray[j].style.opacity = '1';
        for (let i = 0; i < climateArray.length; i++) {
            if (i !== j)
                climateArray[i].style.opacity = '0.2';
        }
    })
}