var typed = new Typed(".auto-type", {
    strings: ["Learning", "Coding", "Repeat"],
    typeSpeed: 150,
    backSpeed:150,
    loop:true
});

const btnSwitch =document.getElementById('switch');
btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});
