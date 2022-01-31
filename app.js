/*console.log("bonjour")

var l;

l = [
    [0, -1, 1],//0
    [2,1, 1],//1
    [1, 1, 0],//2
];
//->[1,0,0]

//console.log(l.map((a,i)=>a[i]))

//a=[1,-1,0] , i=0 -> a[0] = 1
//a=[2,0,1] ,i=1 -> a[1] = 0
//a=[4,1,0] ,i=2 ->a[2] = 0
//->[1,0,0]
// [1,2,4]

if(l.map((a,i)=>a[i]).every(e=>e==1)){
    console.log('x gagne')
}

if(l.map((a,i)=>a[i]).every(e=>e==0)){
    console.log('o gagne')
}

if(l.map((a,i)=>a[2-i]).every(e=>e==1)){
    console.log('x gagne')
}

if(l.map((a,i)=>a[2-i]).every(e=>e==0)){
    console.log('o gagne')
}


for(let i=0;i<3;i++){
    if(l.map(a=>a[i]).every(a => a==1)){
        console.log('x gagne')
    }
    if(l.map(a=>a[i]).every(a => a==0)){
        console.log('o gagne')
    }
}

const x = 5;

console.log(x)



var m = [1, 2, 3]
//multiplication(1) -> 2
//[2]

//multiplication(2)->4
//[2,4]

//multiplication(3)->6
//[2,4,6]
var n = m.map((a) => 2 * a);
//console.log(n)
//sortie [2, 4, 6]


// ['x', 'x', 'x']
//l.every(condition) => true

// ['x', 'o', 'x']
//l.every(condition) => false

function test(a){
    return a == 1
}

var ligne = [1, 1, 1] //-> true

ligne.every(a => a==1) //->true

///Test pour les lignes
for (let i = 0; i < 3; i++) {
    if (l[i][0] == l[i][1] && l[i][1] == l[i][2]) {
        if (l[i][0] == 0) {
            console.log('o gagne')
        }
        if (l[i][0] == 1) {
            console.log('x gagne')
        }
    }
}

for(let i=0;i<3;i++){
    if(l[i].every(a => a==1)){
        console.log('x gagne')
    }
    if(l[i].every(a => a==0)){
        console.log('o gagne')
    }
}

/*
//Test pour les colonnes
for(var i=0;i<3;i++){
    if(l[0][i] == l[1][i] && l[1][i] == l[2][i]){
        if(l[0][i] == 0){
            console.log('o gagne')
        }
        if(l[0][i] == 1){
            console.log('x gagne')
        }
    }
}

if(l[0][0]==l[1][1] && l[1][1]==l[2][2]){
    if(l[0][0] == 0){
        console.log('o gagne')
    }
    if(l[0][0] == 1){
        console.log('x gagne')
    }
}

if(l[0][2]==l[1][1] && l[1][1]==l[2][0]){
    if(l[1][1] == 0){
        console.log('o gagne')
    }
    if(l[1][1] == 1){
        console.log('x gagne')
    }
}*/

//Charger les fichiers audios
var gagneAudio = new Audio('audio/gagne.mp3')
var nulAudio = new Audio('audio/nul.wav')

//on peut stocker arrow functions dans des variables
var cliquer = () => {
    console.log('bonjour')
    console.log('au revoir')
}

//console.log(cases)

//case0.addEventListener("click",cliquer)

//console.log(case0)

//avoir tous les cases de la matrice
var cases = document.querySelectorAll('.case')

//la matrice elle meme
var matrice = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
]

//variable nbr d'essai
var nbEssai = 1;

//Listre des noms des joueurs

var joueurs = []

//DOM: Document Object Model

//avoir une résultat
function verifier() {
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 3; i++) {
            //pour les lignes
            if (matrice[i].every(e => e == k)) return k;
            //pour les colonnes
            if (matrice.map(e => e[i]).every(e => e == k)) return k;
        }
        //pour le diagonal
        if (matrice.map((e, v) => e[v]).every(e => e == k)) return k;
        //pour l'anti-diagonl
        if (matrice.map((e, v) => e[2 - v]).every(e => e == k)) return k;
    }
    if (nbEssai == 10) return 2;
    //console.log(matrice);
    return -1;
}

//associer une fonction lorsqu'on clique sur les cases
cases.forEach(e => e.addEventListener('click', (ev) => {
    //ev.target.innerText = 'x'
    if (ev.target.innerText == "") {
        /*ev.target.innerText =
            (nbEssai % 2 == 0) ? 'o' : 'x'
            */
        //on ajoute les classes x et o pour changer les valeurs
        if (nbEssai % 2 == 0) {
            ev.target.classList.add('o')
        } else {
            ev.target.classList.add('x')
        }
        let id = ev.target.id
        //pour avoir les indices de la matrice
        matrice[parseInt(id / 3)][id % 3] = nbEssai % 2
        //écrire le tour de joueurs
        document.querySelector('.tableau').innerText =
            'Tour de ' + joueurs[(nbEssai + 1) % 2]
        nbEssai++
    }
    //avoir le resultat
    let resultat = verifier()
    if (resultat != -1) {
        //cas de nul
        if (resultat == 2) {
            document.querySelector('#resultat').innerText = 'Null!!😞'
            nulAudio.play()
        } else {
            //cas des gagnants
            document.querySelector('#resultat').innerText =
                joueurs[resultat] + ' gagne';
            gagneAudio.play()
            //La librairie Party.js pour les effets
            party.confetti(document.querySelector('body'), {
                count: party.variation.range(20, 40)
            });
        }
        //on change la page pour afficher la résultat
        document.querySelector('.resultat-container').classList.remove('cache')
        document.querySelector('.tableau').classList.add('cache')
        document.querySelector('.matrice-jeu').classList.add('cache')
    }
}))
//avoir le formulaire
let form = document.querySelector('.bienvenu')

//on associe notre fonction lorsque on envoie par défaut
form.addEventListener('submit', (ev) => {
    //Pour ignorer les comportements par défaut (recharge de page, etc...)
    ev.preventDefault()
    //Stocker les noms des joueurs
    joueurs[0] = form['nom2'].value
    joueurs[1] = form['nom1'].value
    //préparer et changer la page pour démarrer le jeu
    document.querySelector('.tableau').innerText = 'Tour de ' + joueurs[1]
    document.querySelector('.bienvenu-container').classList.add('cache')
    document.querySelector('.tableau').classList.remove('cache')
    document.querySelector('.matrice-jeu').classList.remove('cache')
})

