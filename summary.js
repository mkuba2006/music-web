const i = document.querySelectorAll('.fa-heart');
const favourite = document.querySelector('#fav');
const navbar = document.querySelector('.navbar');
const cont = document.createElement('ul');
navbar.after(cont);

navbar.addEventListener('click', ()=>{
    cont.classList.toggle('uls');
})


i.forEach((a)=>{
    const parent = a.parentElement.innerHTML;
    const copy = document.createElement('li');
    copy.innerHTML = parent;
    a.addEventListener('click', ()=>{
        a.classList.toggle('fa-regular');
        a.classList.toggle('fa-solid');
        if(a.classList.contains('fa-solid')){
            cont.appendChild(copy);
        } else{
            cont.removeChild(copy);
        }
    })
})
