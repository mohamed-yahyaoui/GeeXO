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

var matrice = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1],
]

function verifier(){
    for(let k=0;k<2;k++){
        //pour les lignes
        if(matrice.every(e => e == k)) return k;
        //pour les colonnes
        for(let i=0;i<3;i++){
            if(matrice[i].map(e=>e[i]).every(e => e==k)) return k;
        }
        //pour le diagonal
        if(matrice.map((e,v)=>e[v]).every(e=> e==k)) return k;
        //pour l'anti-diagonl
        if(matrice.map((e,v)=>e[2 - v]).every(e=> e==k)) return k;
    }
    return -1;
}