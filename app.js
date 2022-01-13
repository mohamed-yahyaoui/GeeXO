var courant;
let nb_essai;
var etat;
let joueur1, joueur2;
let tableau = document.querySelector('.tableau');
var gagneAudio = new Audio('audio/gagne.mp3');
var nulAudio = new Audio('audio/nul.wav')


document.querySelector('.bienvenu').addEventListener('submit', initialiser)

function initialiser(ev) {
    ev.preventDefault();
    document.querySelector('.bienvenu-container').classList.toggle('cache');
    joueur1 = ev.target['nom1'].value;
    joueur2 = ev.target['nom2'].value;
    demarrer();
}

function demarrer() {
    courant = 1;
    nb_essai = 1;
    etat = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
    ];
    document.querySelectorAll('.x,.o').forEach(e => e.classList.remove('x', 'o'))
    document.querySelector('.matrice-jeu').classList.toggle('cache');
    document.querySelector('.tableau').classList.toggle('cache');
    tableau.innerHTML = `Tour de ${(courant == 0) ? joueur2 : joueur1}`
}

function redemarrer() {
    document.querySelector('.resultat-container').classList.toggle('cache')
    demarrer();
}

function verifier() {
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 3; i++) {
            if (etat[i].every(e => e == j)) return j;
            if (etat.map((v, c) => v[i]).every(e => e == j)) return j
        }
        if (etat.map((v, c) => v[c]).every(e => e == j)) return j
        if (etat.map((v, c) => v[v.length - c - 1]).every(e => e == j)) return j;
    }
    if (nb_essai == 9) return 2;
    return -1;
}

function declarerResultat(resultat) {
    if (resultat == 2) {
        nulAudio.play();
        document.querySelector('#resultat').innerHTML = 'Nul !!😞😞'
    } else {
        gagneAudio.play();
        document.querySelector('#resultat').innerHTML =
            `${(resultat == 0) ? joueur2 : joueur1} gagne !! 🥳🥳`;
        party.confetti(document.querySelector('body'), {
            shapes: ["square", "circle", "roundedRectangle"],
            size: 2,
            count: 60,
            spread: 60
        });
    }
    document.querySelector('.matrice-jeu').classList.toggle('cache');
    document.querySelector('.tableau').classList.toggle('cache');
    document.querySelector('.resultat-container').classList.toggle('cache')

}

document.querySelectorAll('.grid-item').forEach(e => e.addEventListener("click", (ev) => {
    let id = ev.target.id;
    let resultat;
    if (!ev.target.classList.contains('x') && !ev.target.classList.contains('o')) {
        ev.target.classList.add((courant == 0) ? 'o' : 'x');
        etat[Math.floor(id / 3)][id % 3] = courant;
        resultat = verifier();
        if (resultat != -1) declarerResultat(resultat);
        courant = (courant + 1) % 2;
        tableau.innerHTML = `Tour de ${(courant == 0) ? joueur2 : joueur1}`
        nb_essai++;
    }
}))