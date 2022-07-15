//const switchElement = document.querySelector('.switch')

//switchElement.addEventListener('click', () => {
//    document.body.classList.toggle('dark');
//})

$('.panzoom a').on('mousedown touchstart', function( e ) {
    e.stopImmediatePropagation();
});

const zoomElement = document.querySelector(".map");
const parent = zoomElement.parentElement;
const panzoom = Panzoom(zoomElement, {
    handleStartEvent: (event) => {
        event.preventDefault()
    },
    minScale: 1,
    maxScale: 12,
    contain: 'outside'
});
zoomElement.addEventListener('wheel', panzoom.zoomWithWheel);

const climateArray = [];
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

const defaultColors = [
    '#69fe55',
    '#0304fe',
    '#0378fe',
    '#48aaf7',
    '#f2a405',
    '#fad967',
    '#ff0201',
    '#ff9895',
    '#c7ff52',
    '#fdf909',
    '#c8c80c',
    '#95fc95',
    '#6bce6e',
    '#04fefe',
    '#38c8fc',
    '#047e7f',
    '#024861',
    '#ff00fe',
    '#c90cc8',
    '#923896',
    '#a8affc',
    '#0378fe',
    '#320987',
    '#676767',
    '#b2b3b3',
    '#4d52b4'
];
const altColors = [
    '#394c33',
    '#1c2250',
    '#263250',
    '#2f3c4f',
    '#433a26',
    '#474535',
    '#422120',
    '#45393c',
    '#434c32',
    '#494b2b',
    '#3f4128',
    '#3d4b3e',
    '#354236',
    '#364c51',
    '#314250',
    '#263338',
    '#1f2832',
    '#422550',
    '#3a2741',
    '#30263c',
    '#393d50',
    '#263250',
    '#201e39',
    '#2c2e33',
    '#3b3d42',
    '#272b42'
];

const selector = document.querySelector('#selected');
const landElement = document.querySelector('#Land');

const svg = document.querySelector('#climates')
const delta = 6;

let startX, startY;

svg.addEventListener('pointerdown', function (event) {
    startX = event.pageX;
    startY = event.pageY;
});

svg.addEventListener('pointerup', function (event) {
    const diffX = Math.abs(event.pageX - startX);
    const diffY = Math.abs(event.pageY - startY);

    if (diffX < delta && diffY < delta) {
        for (let j = 0; j < climateArray.length; j++) {
            if (event.target.parentElement.id === climateArray[j].id) {
                climateArray[j].style.fill = defaultColors[j];
                selector.innerHTML = climateArray[j].id;
            }
            else if (event.target.id === 'climates') {
                selector.innerHTML = 'Interactive Climate Map';
                climateArray[j].style.fill = defaultColors[j];
            }
            else {
                climateArray[j].style.fill = altColors[j];
            }
        }
    }
});

