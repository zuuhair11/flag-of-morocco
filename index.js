const box = document.querySelector('.box');

setTimeout( () => {
    if(confirm('Would you like the flag to start spining')) {
        box.classList.add('spining-around');
    }
    
}, 3000);