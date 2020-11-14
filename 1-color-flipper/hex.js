const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let random = getRandomValue();
    document.body.style.backgroundColor =`#${random}`;
    color.textContent=`#${random}`;
})

function getRandomValue(){
    let random = "";
    for(let i = 0;i<6;i++){
        random = random + hex[Math.floor(Math.random() * hex.length)];
    }
    return random;
}