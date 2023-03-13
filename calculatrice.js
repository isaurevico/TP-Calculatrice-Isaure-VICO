let calcul = "";
let calculAffichage = "";
let tabChiffres = ["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf"];
let tabCaracteres = ["diviser", "multiplication","moins", "plus","parenthese1","parenthese2","virgule"];
let tabSymboles = ["/","*","-","+","(",")","."];
let tabSymbolesAffichage = [" ÷ "," x "," - "," + ","(",")",","];


for(let i = 0; i < tabChiffres.length; i++){
    document.getElementById(tabChiffres[i]).addEventListener("click", () =>{
        calcul += i;
        calculAffichage += i;
        document.getElementById("calcul").innerHTML = calculAffichage;
    });
}

for(let i = 0; i < tabSymboles.length; i++){
    document.getElementById(tabCaracteres[i]).addEventListener("click", () =>{
        calcul += tabSymboles[i];
        calculAffichage += tabSymbolesAffichage[i];
        document.getElementById("calcul").innerHTML = calculAffichage;
    });
}


document.getElementById("egal").addEventListener("click", () =>{
    try{
        document.getElementById("resultat").innerHTML = eval(calcul); 
    }
    catch(e){
        document.getElementById("resultat").innerHTML = "Erreur de calcul"
    }
});


document.getElementById("reset").addEventListener("click", () =>{
    document.getElementById("calcul").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";
    calcul = "";
    calculAffichage = "";
});


