const heure = document.querySelector('.heure');
const date = document.querySelector('.date');
const affichage = document.querySelector('.start')
const button = document.querySelectorAll('.btn');

let deuxchiffre = function(num){
    if(num<10){
        num = "0"+num;
        return num;
    }
    else{
        num = num;
        return num;
    }
}
const horloge = () =>{
    const aujd = new Date();
    heure.textContent = deuxchiffre(aujd.getHours()) + ':' + deuxchiffre(aujd.getMinutes()) + ':' + deuxchiffre(aujd.getSeconds());
    let jour=['lundi','mardi','mercredi','jeudi','vrndredi','samedi','dimanche'];
    let mois = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','novembre','decembre'];

    date.textContent = jour[aujd.getDay()-1] +' '+ deuxchiffre(aujd.getDate()) + ' '+ mois[aujd.getMonth()] +' '+aujd.getFullYear();
    setTimeout(horloge,1000);
};
horloge();
let t, h=0,min=0,sec=0;
//fonction start 
const start = () =>{
    sec +=1;
    if(sec>=60){
        min += 1;
        sec=0;
    }
    if(min>=60){
        h +=1;
        min=0;
    }
    affichage.innerHTML = deuxchiffre(h) +':'+deuxchiffre(min)+':'+deuxchiffre(sec);
}
//fonction stop
const stop = () =>{
    clearInterval(t);
}
//fonction reset
const reset = () =>{
    h=0;
    min=0;
    sec = 0;
    affichage.innerHTML = deuxchiffre(h) +':'+deuxchiffre(min)+':'+deuxchiffre(sec);
    stop();
}
button[0].addEventListener('click',function(){
    t=setInterval(start,1000);
    button[0].style.background = "#777";
    button[1].style.background = "#ff0000";
});
button[1].addEventListener('click',function(){
    stop();
    button[0].style.background = "#00009c";
    button[1].style.background = "#777";
});
button[2].addEventListener('click',function(){
    reset();
    button[0].style.background = "#00009c";
    button[1].style.background = "#777";
})

