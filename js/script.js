/*
L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Rendetemi fiero :muscolo: */
function createNewBox(griglia,box,max){
    let newBox=document.createElement('div');
    newBox.className=box;
    griglia.append(newBox);
    for(i=0;i<max;i++){
        newBox.innerHTML=i;
    }
    newBox.addEventListener('click',function(){
        this.classList.toggle("azure");
    })
}

let scelta1=document.getElementById("level1");
let griglia1=document.getElementById("griglia1");
let scelta2=document.getElementById("level2");
let griglia2=document.getElementById("griglia2");
let scelta3=document.getElementById("level3");
let griglia3=document.getElementById("griglia3");

scelta1.addEventListener('click',function(){
        for(i=0; i < 100; i++){
        createNewBox(griglia1,'box1',100);
    }
});

