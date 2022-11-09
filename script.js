const accordion = document.querySelectorAll('.container');

for (let container of accordion){
    container.addEventListener('click', () =>{
        container.classList.toggle('active')
    })
}