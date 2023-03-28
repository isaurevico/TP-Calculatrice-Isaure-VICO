const tabChiffres = ["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf"];
const tabCaracteres = ["diviser", "multiplication","moins", "plus","parenthese1","parenthese2","virgule"];
const tabSymboles = ["/","*","-","+","(",")","."];
const tabSymbolesAffichage = [" ÷ "," x "," - "," + ","(",")",","];

class Calculatrice{
    constructor(){
        this.calcul = [];
        this.calculAffichage = [];
    }

    afficheCalcul(element){
        console.log(tabSymboles.indexOf(element));
        if(tabSymboles.includes(element)){
                this.calcul.push(tabSymboles[tabSymboles.indexOf(element)]);
                this.calculAffichage.push(tabSymbolesAffichage[tabSymboles.indexOf(element)]);
                document.getElementById("calcul").innerHTML = this.calculAffichage.join(" ");
            }

        else if(typeof element == "number"){
            this.calcul.push(element);
            this.calculAffichage.push(element);
            document.getElementById("calcul").innerHTML = this.calculAffichage.join(" ");
        }
        console.log(this.calcul)
    }

    effectuerCalcul(){
        try{
            document.getElementById("resultat").innerHTML = eval(this.calcul.join("")); 
        }
        catch(e){
            document.getElementById("resultat").innerHTML = "Erreur de calcul"
        }
    }

    resetCalcul(){
        document.getElementById("calcul").innerHTML = "";
        document.getElementById("resultat").innerHTML = "";
        this.calcul = [];
        this.calculAffichage = [];
    }

    supprCalcul(){
        this.calcul.pop();
        this.calculAffichage.pop();
        document.getElementById("calcul").innerHTML = this.calculAffichage.join(" ");
    }
}

let calculatrice = new Calculatrice();


