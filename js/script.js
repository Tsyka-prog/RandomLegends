const legendes = [["Bloodhound","./assets/BH.png"],
["Gibraltar","./assets/GIBI.png"],
["Lifeline","./assets/LF.png"], 
["Pathfinder","./assets/PATH.png"], 
["Wraith","./assets/WRAITH.png"],               
["Bangalore","./assets/BANGA.png"], 
["Caustic","./assets/CAUST.png"], 
["Mirage","./assets/MIRAGE.png"], 
["Octane","./assets/OCTANE.png"], 
["Wattson","./assets/WATT.png"], 
["Crypto","./assets/CRYPTO.png"],          
["Revenant","./assets/REV.png"], 
["Loba","./assets/LOBA.png"], 
["Rampart","./assets/RAMP.png"], 
["Horizon","./assets/HORIZ.png"], 
["Fuse","./assets/FUSE.png"],          
["Valkyrie","./assets/VALK.png"], 
["Seer","./assets/SEER.png"],
["Ash","./assets/ASH.png"], 
["Mad Maggie","./assets/MM.png"],
["Newcastle","./assets/NEWC.png"]];

const modeDeJeu = document.querySelector('select');

const button = document.getElementsByClassName('submit');
const relance = document.getElementsByClassName('relance')

const legende1 = document.getElementById('legende1');
const legende2 = document.getElementById('legende2');
const legende3 = document.getElementById('legende3');

const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

let choix1, choix2, choix3;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);;
  }


button[0].addEventListener('click', e => {

switch (modeDeJeu.value) {

    case '1':
        div1.setAttribute('class', 'legCard visible');
        div2.setAttribute('class', 'legCard invisible');
        div3.setAttribute('class', 'legCard invisible');
        choix1 = getRandomInt(legendes.length)
        legende1.setAttribute('src', legendes[choix1][1]);

        relance[0].addEventListener('click',e =>{
            choix1 = getRandomInt(legendes.length)
            legende1.setAttribute('src', legendes[choix1][1]);

        })
        break;

    case '2':
        div1.setAttribute('class', 'legCard');
        div2.setAttribute('class', 'legCard visible');
        div3.setAttribute('class', 'legCard invisible');
        choix1 = getRandomInt(legendes.length)
        do{
            choix2 = getRandomInt(legendes.length)}
            while (choix2 == choix1)
        legende1.setAttribute('src', legendes[choix1][1]);
        legende2.setAttribute('src', legendes[choix2][1]);

        relance[0].addEventListener('click',e =>{
            choix1 = getRandomInt(legendes.length)
            legende1.setAttribute('src', legendes[choix1][1]);

        })
        relance[1].addEventListener('click',e =>{
            choix2 = getRandomInt(legendes.length)
            legende2.setAttribute('src', legendes[choix2][1]);

        })
        break;


    case '3':
        div1.setAttribute('class', 'legCard visible');
        div2.setAttribute('class', 'legCard visible');
        div3.setAttribute('class', 'legCard visible');
        choix1 = getRandomInt(legendes.length)
        do{
            choix2 = getRandomInt(legendes.length)}
            while (choix2 == choix1)
        do{
            choix3 = getRandomInt(legendes.length)}
            while (choix3 == choix1 || choix3 == choix2)
        legende1.setAttribute('src', legendes[choix1][1]);
        legende2.setAttribute('src', legendes[choix2][1]);
        legende3.setAttribute('src', legendes[choix3][1]);

        relance[0].addEventListener('click',e =>{
            choix1 = getRandomInt(legendes.length)
            legende1.setAttribute('src', legendes[choix1][1]);

        })       
        relance[1].addEventListener('click',e =>{
            choix2 = getRandomInt(legendes.length)
            legende2.setAttribute('src', legendes[choix2][1]);

        })        
        relance[2].addEventListener('click',e =>{
            choix3 = getRandomInt(legendes.length)
            legende3.setAttribute('src', legendes[choix3][1]);

        })
            break;

    default:
        console.log('erreur');
        break;
}
} );
