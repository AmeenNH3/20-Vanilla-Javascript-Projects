//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(e => {
//     e.addEventListener('click',function(btn){
//        const question= btn.currentTarget.parentElement.parentElement;
//        question.classList.toggle('show-text');
//     })
// });

const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
    const btn = q.querySelector(".question-btn");
    //console.log(btn);


    btn.addEventListener('click', function(){
        
        questions.forEach(function(item){
          
            if(item!==q){
                console.log("removed");
                item.classList.remove('show-text');
            }
            
           
        });
        q.classList.toggle('show-text');
    });

});





