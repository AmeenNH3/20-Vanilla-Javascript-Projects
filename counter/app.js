
let count = 0;
const btns = document.querySelectorAll('.btn');
let value = document.getElementById('value');
//let value= parseInt(text.textContent);

btns.forEach(function(element){
    element.addEventListener('click',function(e){
        if(e.target.classList.contains('decrease')){
            count--;
        }
        if(e.target.classList.contains('reset')){
            count = 0;
        }
        if(e.target.classList.contains('increase')){
            count++;
        }
        if(count<0){
            value.style.color = "red";
        }
        else if(count>0){
            value.style.color ="green";
        }
        else{
            value.style.color="var(--clr-grey-1)";
        }

        value.textContent = count;
        
    })
})