const tabChiffres = ["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf"];
const tabCaracteres = ["diviser", "multiplication","moins", "plus","parenthese1","parenthese2","virgule"];
const tabSymboles = ["/","*","-","+","(",")","."];
const tabSymbolesAffichage = [" ÷ "," x "," - "," + ","(",")",","];

class Calculatrice{
    constructor(){
        this.calcul = "";
        this.calculAffichage = "";
    }

    afficheCalcul(element){
        if(tabSymboles.includes(element)){
                calcul += tabSymboles[tabSymboles.indexOf(element)];
                calculAffichage += tabSymbolesAffichage[tabSymbolesAffichage.indexOf(element)];
                document.getElementById("calcul").innerHTML = calculAffichage;
            }

        else if(typeof element == "number"){
            calcul += element;
            calculAffichage += element;
            document.getElementById("calcul").innerHTML = calculAffichage;
        }

        
    }
}

let calculatrice = new Calculatrice();



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


